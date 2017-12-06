const html = require('choo/html');

module.exports = function donateButtons(state, emit) {
  return html`
  <div class="donate-button-list-wrapper">
  <ul class="list pl0 mb0">
    <li class="dib mr2 mb2">
      <a
        href=""
        onclick=${() => {
          emit('amount', 300);
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green value'}">
          $3
      </a>
    </li>
    <li class="dib mr2 mb2">
      <a
        href=""
        onclick=${() => {
          emit('amount', 1000);
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green value'}">
          $10
      </a>
    </li>
    <li class="dib mr2 mb2">
      <a
        href=""
        onclick=${() => {
          emit('amount', 3500);
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green value'}">
          $35
      </a>
    </li>
    <li class="dib mr2 mb2">
      <a
        href=""
        onclick=${() => {
          emit('amount', 5000);
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green value'}">
          $50
      </a>
    </li>
    <li class="dib mr2 mb2">
      <a
        href=""
        onclick=${() => {
          emit('amount', 25000);
        }}
        class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
          'color-neutral-80 ba b--green value'}">
          $250
      </a>
    </li>
  </ul>
  </div>
`;
};
