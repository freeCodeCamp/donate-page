const express = require('express');
const bodyParser = require('body-parser');
const config = require('../lib/config');
const keys = require('./keys');
const handleStripe = require('./paymentHandlers/stripe');

const port = config.port || 8080;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stripe-key', (req, res) => {
  res.json({ key: keys.stripe.public });
});

app.get('/amazon-key', (req, res) => {
  res.json({ key: keys.amazon.merchant });
});

app.post('/charge-stripe', handleStripe);

app.listen(port, () => {
  console.log(`donate-api started on :${port}`);
});
