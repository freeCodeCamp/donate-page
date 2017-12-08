const config = require('../lib/config');

const keys = {
  stripe: {
    secret: config.stripe && config.stripe.secret,
    public: config.stripe && config.stripe.public
  },
  amazon: {
    merchant: config.amazon && config.amazon.merchant
  }
};

if (!keys.stripe.secret || !keys.stripe.public) {
  throw new Error('Stripe keys required');
}

if (!keys.amazon.merchant || !keys.amazon.client || !keys.amazon.secret) {
  throw new Error('Amazon keys required');
}

module.exports = keys;
