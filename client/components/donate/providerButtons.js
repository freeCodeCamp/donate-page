const html = require('choo/html');

module.exports = function providerButtons(emit) {
  return html`
  <div class="donate-button-list-wrapper">
    <ul class="list pl0 mb0">
      <li class="dib mr2 mb2">
        <a
          href=""
          onclick=${() => {
            emit('checkout-method', 'paypal');
          }}
          class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
            'color-neutral-80 ba b--green value'}">
            Paypal
        </a>
      </li>
      <li class="dib mr2 mb2">
        <a
          href=""
          onclick=${() => {
            emit('checkout-method', 'stripe');
          }}
          class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
            'color-neutral-80 ba b--green value'}">
            Stripe
        </a>
      </li>
    </ul>
  </div>
  `;
};
