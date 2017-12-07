var html = require('choo/html');
var choo = require('choo');
var log = require('choo-log');
var css = require('sheetify');
var main = require('./components/main');
const success = require('./components/success');
const abandoned = require('./components/abandoned');

const { loadStripeCheckout, stripeCheckout } = require('./checkouts/stripe');
const { paypalButtonValues } = require('./checkouts/paypal');

const handleCheckout = {
   /* no-op for paypal, handled via form */
  paypal: () => {},
  stripe: stripeCheckout
};

css('tachyons');
css('dat-colors');
css('./app.css');
// css('./style.css');

var app = choo();
app.use(log());
app.use(loadStripeCheckout);
app.use(handleDonate);
app.route('/', mainView);
app.route('/*', mainView);
app.mount('body');

function mainView(state, emit) {
  return html`
    <body class="color-neutral">
      ${main(state, emit)}
    </body>
  `;
}

function handleDonate(state, emitter) {
  state.checkout = {};
  state.donation = {};
  state.paypal = {};

  emitter.on('toggleBitcoinView', function() {
    state.bitcoinView = !state.bitcoinView;
    emitter.emit('render');
  });
  emitter.on('toggleValInput', function() {
    state.showValInput = !state.showValInput;
    emitter.emit('render');
  });
  emitter.on('amount', function(value) {
    state.donation.amount = value;
    state.paypal.buttonValue = paypalButtonValues[value];
    emitter.emit('render');
  });
  emitter.on('checkout-method', function(method) {
    state.donation.checkoutMethod = method;
    emitter.emit('render');
  });
  emitter.on('checkout', function() {
    state.checkout = Object.assign(state.checkout, {
      amount: state.donation.amount,
      // force reset vals
      success: null,
      error: null,
      pending: true
    });
    emitter.emit('log:info', state.checkout);
    emitter.emit('render');
    const { checkoutMethod } = state.donation;
    handleCheckout[checkoutMethod](state, emitter);
  });
}
