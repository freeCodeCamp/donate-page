const express = require('express');
const bodyParser = require('body-parser');
const config = require('../lib/config');
const keys = require('./keys');
const handleStripe = require('./paymentHandlers/stripe');

const port = config.port || process.env.PORT;

if (!keys.stripe.secret || !keys.stripe.public) {
  throw new Error('Stripe keys required');
}

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stripe-key', (req, res) => {
  res.json({ key: keys.stripe.public });
});

app.post('/charge-stripe', handleStripe);

app.listen(port, () => {
  console.log(`app started on http://127.0.0.1:${port}`);
});
