const config = require('../lib/config');

module.exports = {
  stripe: {
    secret: config.stripe && config.stripe.secret,
    public: config.stripe && config.stripe.public
  }
};
