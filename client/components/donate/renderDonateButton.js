const html = require('choo/html');

module.exports = function renderDonateButton(state, emit) {
  if (!state.donation.checkoutMethod || !state.donation.amount) {
    return html`<div></div>`;
  }
  const normalButton = html`
  <div class="donate-button-list-wrapper">
  <ul class="list pl0 mb0">
    <li class="dib mr2 mb2 full-width">
      <a
        onclick=${() => {
          emit('checkout');
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green full-width'}">
          Donate
      </a>
    </li>
  </ul>
</div>
  `;
  if (state.donation.checkoutMethod !== 'paypal') {
    return normalButton;
  }
  return html`
<div class="donate-button-list-wrapper">
  <ul class="list pl0 mb0">
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
          onclick=${() => {
            emit('checkout');
          }}
          type="submit"
          >
          Donate
        </button>
      </form>
    </li>
  </ul>
</div>
  `;
};
