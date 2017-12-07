const html = require('choo/html');
const { renderAmazonButton } = require('../../checkouts/amazon');

module.exports = function providerButtons(state, emit) {
  renderAmazonButton(state, emit);
  return html`
  <div class="donate-button-list-wrapper">
    <ul class="list pl0 mb0 payment-methods">
      <li class="dib mr2 mb2 full-width">
        <button
          onclick=${() => {
            emit('checkout-method', 'amazon');
            emit('checkout');
            return;
          }}
          class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
            'color-neutral-80 ba b--green full-width'}">
            <div id='AmazonPayButton'></div>
        </button>
      </li>
      <li class="dib mr2 mb2 full-width">
      <form
      action="//www.paypal.com/cgi-bin/webscr"
      method="post"
      onsubmit="ga(
        'send',
        {
          hitType: 'event',
          eventCategory: 'donation',
          eventAction: 'click',
          eventLabel: 'paypal',
          eventValue: ${state.donation.amount / 100}
        }
      );"
      target="_blank"
      >
      <input
        name="cmd"
        type="hidden"
        value="_s-xclick"
      />
      <input
        name="hosted_button_id"
        type="hidden"
        value="${state.paypal.buttonValue}"
      />
      <button
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green full-width'}"
        name="submit"
        onclick=${(e) => {
          if (!state.donation.amount) {
            e.preventDefault();
          }
          emit('checkout-method', 'paypal');
          emit('checkout');
          return;
        }}
        type="submit"
        >
        <img
          alt='pay with paypal'
          src='/images/payment-logos/pp-logo-200px.png'
          title='Pay with PayPal'
        />
      </button>
    </form>>
      </li>
      <li class="dib mr2 mb2 full-width">
        <button
          onclick=${() => {
            emit('checkout-method', 'stripe');
            emit('checkout');
            return;
          }}
          class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
            'color-neutral-80 ba b--green full-width'}"
            >
            Credit or Debit Card
        </button>
      </li>
    </ul>
  </div>
  `;
};
