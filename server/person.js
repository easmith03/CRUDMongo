// message.js - Message route module

const express = require('express');
const router = express.Router();
const mongo = require('mongodb');

const messages = ['Lets Go', 'What are you going to do?', 'This move is critical', 'It is getting interesting', 'Did you leave yourself an opening?', 'Time is running out', 'This is it!', 'Almost too late', 'Game over', 'WHAT????'];
// Home page route
router.get('/', function(req, res) {
	console.log('REQ Message:', req.query.msg);
	res.status(200);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({resp: messages[parseInt(req.query.msg, 10)]}));
	  //res.send(JSON.stringify({resp: 'hello'}));
});

// About page route
router.get('/about', function(req, res) {
  res.send('About Messages');
});

module.exports = router;