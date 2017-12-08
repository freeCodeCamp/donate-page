var html = require('choo/html');
var donate = require('./donate');
const fccLogo = require('./fccLogo');

function donateView(state, emit) {
  return html`
  <article class="cf ph3 ph5-ns pv4 color-neutral relative">
      <header class="fn fl-ns w-50-l pr4-ns">
        <h1 class="f3 mb3 mt0 lh-title">${fccLogo()}</h1>
        <h2 class="f5 ttu tracked color-neutral-70">
          Learn to code and help non-profits
        </h2>
        <div id="feature-logo-wrap" class="w-100 h-100 flex pv5-ns">
          <a href="https://freecodecamp.org" title="freeCodeCamp.org">
          <img
            alt="freecodeCamp.org"
            class="pr5-ns pr2 dn db-ns"
            src="/images/FCCfire.svg"
          />
          </a>
        </div>
      </header>
      <div class="fn fl-ns w-50-l">
        <p class="lh-copy measure f5 mt4 mt0-ns ">
          <strong>Code for Science & Society</strong>
          (CSS), a registered US 501(c)(3), supports and builds open source
          projects with a focus on science, government, and journalism. Our
          primary initiative is the
          <a
            class="link dim"
            href="http://datproject.org"
            >
              Dat Project
          </a>
          . We also host other open source science programs such as
          <a
            class="link dim"
            href="http://sciencefair-app.com/"
            >
              Science Fair
          </a>
          and
          <a
            class="link dim"
            href="http://stenci.la"
            >
              Stencila
          </a>.
        </p>
        <p class="lh-copy measure f5">
          <strong>Why Donate?</strong>
          Primary funding for CSS comes through grants. Donations and
          community support help us get grants in the future. Even small
          donations are great!
        </p>
        <p class="lh-copy measure f5  ">
          <strong>What is my money spent on?</strong>
          100% of your money directly supports folks producing open source
          software and building our community. Our employee headcount and
          salaries depend on our active grants. We have very little overhead
          and all earn the same amount of money. If you want your money to go
          to a specific project, please let us know! We love to hear what you
          are interested in.
        </p>
        <div class="pt1 mt2">
          ${donate(state, emit)}
        </div>
      </div>
  </article>
  `;
}

module.exports = donateView;
