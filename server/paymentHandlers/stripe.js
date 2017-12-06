const Stripe = require('stripe');
const keys = require('../keys');

const stripe = Stripe(keys.stripe.secret);

module.exports = (req, res) => {
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).send({ error: 'Amount Required' });
  }
  return stripe.customers
    .create({
      email: req.body.token.email,
      card: req.body.token.id
    })
    .then(customer =>
      stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            plan: `monthly-donation-${amount}`
          }
        ]
      })
    )
    .then(subscription => res.send(subscription))
    .catch(err => {
      console.error('Stripe Processing Error:', err);
      if (err.type === 'StripeCardError') {
        return res.status(402).send({ error: err.message });
      }
      // I think any other errors would be our fault?
      return res.status(500).send({ error: 'Donation Failed' });
    });
};
