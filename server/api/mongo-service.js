//
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";


module.exports.findAll = function (successCallback, errorCallback) {
    
	MongoClient.connect(url, function(err, db) {
		if (err) {
			errorCallback(err);
			return;
		}
  
		let dbase = db.db("mydb")
		dbase.collection("thing").find({}).toArray(function(err, result) {
			if (err) {
				errorCallback(err);
				return;
			}
			successCallback(result);
			db.close();
		});
	});
}

function findById(id) {
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		let dbase = db.db("mydb");

		dbase.collection("people").findOne(ObjectID(id), function(err, result) {
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
}

function insertOne(document) {
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		let dbase = db.db("mydb");

		dbase.collection("thing").insertOne(document, function(err, response) {
			if (err) {
				res.status(400);
				res.send(err);
				return;
			}
		    console.log('db response', response);
			res.status(201);
			res.send(JSON.stringify(response));
			db.close();
			return;
		});
	});
}

function insertOne(id) {
	
	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("customers").deleteOne({_id: ObjectID(id)}, function(err, obj) {
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
}


function partialUpdateOne(id, document) {

	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("people").updateOne({_id: ObjectID(id)}, { $set: document} , function(err, obj) {
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
}

function updateOne(id, document) {

	MongoClient.connect(url, function(err, db) {
		if (err) {
			res.status(400);
			res.send(err);
			return;
		}
		
		db.collection("people").update({_id: ObjectID(id)}, document, function(err, obj) {
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
}
