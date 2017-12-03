// message.js - Message route module

const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID;

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


// Get all
router.get('/', function(req, res) {
	//console.log('REQ Message:', req.query.msg);
	res.setHeader('Content-Type', 'application/json');

	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
  
		db.collection("people").find({}).toArray(function(err, result) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(200);
			res.send(result);
			console.log(result);
			db.close();
		});
	});
});

//Get by id
router.get('/:personId', function(req, res) {
	//console.log('REQ Message:', req.query.msg);
	res.setHeader('Content-Type', 'application/json');
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		db.collection("people").findOne(ObjectID(req.params.personId), function(err, result) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(200);
			res.send(result);
			console.log(result);
			db.close();
		});
	});
});

//Post insert new
router.post('/', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("people").insertOne(req.body, function(err, response) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(201);
			res.send();
			db.close();
		});
	});
});


//Delete record
router.delete('/:personId', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("customers").deleteOne({_id: ObjectID(req.params.personId)}, function(err, obj) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(200);
			res.send();
			db.close();
		});
	});
});


//Update record partial
router.patch('/:personId', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("people").updateOne({_id: ObjectID(req.params.personId)}, { $set: req.body} , function(err, obj) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(204);
			res.send();
			db.close();
		});
	});
});

//Update record total
router.put('/:personId', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("people").update({_id: ObjectID(req.params.personId)}, req.body, function(err, obj) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
			res.status(204);
			res.send();
			db.close();
		});
	});
});
module.exports = router;