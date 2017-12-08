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
        <div class="pt1 mt2">
          ${donate(state, emit)}
        </div>
        <p class="lh-copy measure f5 mt4 mt0-ns ">
          <strong>freeCodeCamp.org</strong>
          freeCodeCamp is a donor-supported nonprofit. We help millions of
          people learn to code and get their first developer job. We have
          a thriving community around the world of people who are helping
          each other learn new technologies and advance their careers.
        </p>
        <p class="lh-copy measure f5">
          <strong>Why Donate?</strong>
          100% of freeCodeCamp's funding comings from donors like you. Even 
          a small monthly donation will help us cover the cost of servers and
          other expenses. Help us expand our learning resources and support 
          our community.
        </p>
        <p class="lh-copy measure f5  ">
          <strong>Where your donation goes</strong>
        </p>
      </div>
  </article>
  `;
}

module.exports = donateView;
