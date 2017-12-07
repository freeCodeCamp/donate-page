/* global amazon, OffAmazonPayments */
const xhr = require('xhr');
const load = require('load-script2');

exports.loadAmazonCheckout = function loadAmazonCheckout(state, emitter) {
  load(
    'https://static-na.payments-amazon.com/OffAmazonPayments/us/' +
      'sandbox/js/Widgets.js',
    function(err) {
      if (err) {
        return emitter.emit('log:error', err);
      }

      return xhr(
        {
          uri: '/amazon-key',
          json: true
        },
        function(err, resp, body) {
          emitter.emit('log:debug', body);
          if (err || resp.statusCode !== 200) {
            return emitter.emit('log:error', 'Error loading stripe');
          }

          state.amazonKey = body.key;
          state.amazonLoaded = true;

          window.onAmazonLoginReady = function() {
            amazon.Login.setClientId(state.amazonKey);
          };
          emitter.emit('amazonLoaded');
          emitter.emit('log:info', 'loaded amazon checkout.js');
          return null;
        }
      );
    }
  );
};

exports.renderAmazonButton = function renderAmazonButton(state, emitter) {
  if (!state.amazonLoaded) {
    // wait for the amazon script to load
    return setTimeout(() => {
      renderAmazonButton(state, emitter);
    }, 0);
  }
  if (!document.getElementById('AmazonPayButton')) {
    // the amazon button div is not rendered yet
    // push this function back on to the call stack
    // this will give the div a chance to render before
    // this function is run again
    return setTimeout(() => {
      renderAmazonButton(state, emitter);
    }, 0);
  }
  let authRequest;
  OffAmazonPayments.Button('AmazonPayButton', state.amazonKey, {
    type: 'PwA',
    color: 'LightGray',
    authorization: function() {
      const loginOptions = {
        scope: 'payments:widget',
        popup: true
      };
      authRequest = amazon.Login.authorize(loginOptions);
    },
    onError: function(error) {
      emitter.emit('log:info', error);
      state.amazon.login.fail = true;
    }
  });
  return null;
};

exports.handleAmazonCheckout = function handleAmazonCheckout(state, emitter) {
  const { amount, checkoutMethod } = state.donation;
  if (!amount || !checkoutMethod || checkoutMethod !== 'amazon') {
    return;
  }
  document.body.classList.add('dialogIsOpen');
};
