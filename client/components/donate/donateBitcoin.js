const html = require('choo/html');

module.exports = function donateBitcoin() {
  // TODO:@QuincyLarson CoinBase key
  return html`
    <div class="donate-button-list-wrapper">
      <ul class="list pl0 mb0">
        <li class="dib mr2 mb2 bitcoin-button">
          <a
            class="${'mt2 f6 f4-ns tc b dib pv3 ph3 link inv ' +
              'color-neutral-80 ba b--green value'}"
            href="${'https://www.coinbase.com/checkouts/' +
              'ae8b9832ff5ebc3be45ba9b8cdd3f19b'}"
            target="_blank"
            >
            Coinbase
          </a>
        </li>
      </ul>
    </div>
  `;
};
