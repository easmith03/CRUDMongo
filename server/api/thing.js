// thing.js - Thing endpoints

const express = require('express');
const dbService = require('./mongo-service');
const router = express.Router();


function successCallback(res, result) {
    console.log(result);
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json(result);   
}

function errorCallback(res, err) {
    res.setHeader('Content-Type', 'application/json');
    res.status(400);
    res.send(err);   
}

// Get all
router.get('/', function(req, res) {
    
    //dbService.findAll(successCallback.bind(this, res), errorCallback.bind(this, res));
    dbService.findAll()
    .then((result) => successCallback(res, result))
    .catch((err) => errorCallback(res, err));

});


//Get by id
router.get('/:thingId', function(req, res) {
    //dbService.findOne(req.params.personId, successCallback.bind(this, res), errorCallback.bind(this, res));
    dbService.findOne(req.params.thingId)
    .then((result) => successCallback(res, result))
    .catch((err) => errorCallback(res, err));
});

//Post insert new
router.post('/', function(req, res) {
    dbService.insertOne(req.body)
    .then((result) => successCallback(res, result))
    .catch((err) => errorCallback(res, err));

//	res.setHeader('Content-Type', 'application/json');
//	
//	//console.log('req.body', req.body);
//	//res.status(201);
//	//res.send(JSON.stringify(req.body));
//	
//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			res.status(400);
//			res.send(err);
//			return;
//		}
//		
//		let dbase = db.db("mydb");
//
//		dbase.collection("thing").insertOne(req.body, function(err, response) {
//			if (err) {
//				res.status(400);
//				res.send(err);
//				return;
//			}
//		    console.log('db response', response);
//			res.status(201);
//			res.send(JSON.stringify(response));
//			db.close();
//			return;
//		});
//	});
});


//Delete record
router.delete('/:thingId', function(req, res) {
    dbService.deleteOne(req.params.thingId)
    .then((result) => successCallback(res, result))
    .catch((err) => errorCallback(res, err));

//	res.setHeader('Content-Type', 'application/json');
//	
//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			res.status(400);
//			res.send(err);
//			return;
//		}
//		
//		db.collection("customers").deleteOne({_id: ObjectID(req.params.personId)}, function(err, obj) {
//			if (err) {
//				res.status(400);
//				res.send(err);
//				return;
//			}
//			res.status(200);
//			res.send();
//			db.close();
//		});
//	});
});


//Update record partial
router.patch('/:personId', function(req, res) {
//	res.setHeader('Content-Type', 'application/json');
//	
//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			res.status(400);
//			res.send(err);
//			return;
//		}
//		
//		db.collection("people").updateOne({_id: ObjectID(req.params.personId)}, { $set: req.body} , function(err, obj) {
//			if (err) {
//				res.status(400);
//				res.send(err);
//				return;
//			}
//			res.status(204);
//			res.send();
//			db.close();
//		});
//	});
});

//Update record total
router.put('/:personId', function(req, res) {
//	res.setHeader('Content-Type', 'application/json');
//	
//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			res.status(400);
//			res.send(err);
//			return;
//		}
//		
//		db.collection("people").update({_id: ObjectID(req.params.personId)}, req.body, function(err, obj) {
//			if (err) {
//				res.status(400);
//				res.send(err);
//				return;
//			}
//			res.status(204);
//			res.send();
//			db.close();
//		});
//	});
});
module.exports = router;