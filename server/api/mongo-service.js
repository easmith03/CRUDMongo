//Mongo CRUD functions
const mongo = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
let dbConnection;
let dbase;

module.exports.init = function () {
    
    return MongoClient.connect(url)
    .then((db) => {
        console.log("DB Connection");
        dbase = db.db("mydb");
        dbConnection = db;
        return true;
    })
    .catch((err) => {
        console.log("DB Connection error", err);
        throw err;
    });

}

module.exports.close = function () {
    return dbConnection.close();
}


//module.exports.findAll = function (successCallback, errorCallback) {
module.exports.findAll = function () {
    
//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			errorCallback(err);
//			return;
//		}
//  
//		let dbase = db.db("mydb")
//		dbase.collection("thing").find({}).toArray(function(err, result) {
//			if (err) {
//				errorCallback(err);
//				return;
//			}
//			successCallback(result);
//			db.close();
//		});
//	});

//    MongoClient.connect(url)
//    .then(function(db) {
//        let dbase = db.db("mydb")
//        dbase.collection("thing").find({}).toArray()
//        .then((result) => successCallback(result))
//        .then(() => db.close())
//        .catch((err) => errorCallback(err));    
//    })
//    .catch((err) => errorCallback(err));

   return dbase.collection("thing").find({}).toArray();    
 
}

module.exports.findOne = function (id) { 
   
//    MongoClient.connect(url)
//    .then(function(db) {
//        let dbase = db.db("mydb");
//        dbase.collection("thing").findOne(ObjectID(id))   
//        .then((result) => successCallback(result))
//        .then(() => db.close())
//        .catch((err) => errorCallback(err));
//    })
//    .catch((err) => errorCallback(err));
    
    
    return dbase.collection("thing").findOne(ObjectID(id));    
}

module.exports.insertOne = function (document) {
    return dbase.collection("thing").insertOne(document);    

//	MongoClient.connect(url, function(err, db) {
//		if (err) {
//			res.status(400);
//			res.send(err);
//			return;
//		}
//		
//		let dbase = db.db("mydb");
//
//		dbase.collection("thing").insertOne(document, function(err, response) {
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
}

function deleteOne(id) {
	
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
