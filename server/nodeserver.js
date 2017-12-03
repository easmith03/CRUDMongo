const express = require('express');
const app = express();
const thing = require('./api/thing.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/thing', thing);

app.use(express.static('../client/build'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});