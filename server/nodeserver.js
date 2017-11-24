const express = require('express');
const app = express();
const message = require('./person.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/person', message);

//app.use(express.static('../client/build'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});