const html = require('choo/html');
const donateButtons = require('./donateButtons');
const donateBitcoin = require('./donateBitcoin');
const donateResults = require('./donateResults');
const providerButtons = require('./providerButtons');
const renderDonateButton = require('./renderDonateButton');

module.exports = donateView;

function donateView(state, emit) {
  const { pending, success, error } = state.checkout;
  const donateProcessed = pending || (success || error);
  return html`
    <div>
      <h5
        class="f4 mv0 color-neutral-80"
        >
        Choose an amount to donate
      </h5>
      ${donateButtons(state, emit)}
      <p></p>
      <h5
        class="f4 mv0 color-neutral-80"
        >
        Choose how you would like to donate (tax-deductible)
      </h5>
      ${providerButtons(state, emit)}
      ${renderDonateButton(state, emit)}
      <p class="lh-copy f7 black-60 measure">
        We receive donations in USD minus fees.
      </p>
      ${donateProcessed ? donateResults(state) : ''}
      <h5
        class="f4 mb2 color-neutral-80"
        >
        Donate Anonymous Bitcoin (not tax-deductible)
      </h5>
      ${donateBitcoin()}
      <p class="lh-copy f7 black-60 measure">
        Anonymous Bitcoin donations are not tax deducible. Bitcoins sent via
        Coinbase are sent directly to our wallet.
      </p>
    </div>
  `;
}
