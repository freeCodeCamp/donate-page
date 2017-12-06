const html = require('choo/html');

module.exports = function abandonedView() {
  return html`
<div>
  <nav class="navbar navbar-default navbar-fixed-top nav-height">
    <div class="navbar-header">
      <a class="navbar-brand"><img alt="learn to code javascript at freeCodeCamp logo" class="img-responsive nav-logo" src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"></a>
    </div>
    <div class="return-to-free-code-camp">
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="row flashMessage negative-30">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
    </div>
  </div>
  <div class="container text-center">
    <h1>You've abandoned your donation.</h1>
    <h3>You have not been charge for a donation. You can come back and start donating any time.</h3>
    <h3>You can close this tab.</h3>
  </div>
</div>
  `;
};
