var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("people").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.collection("customers").find({}, { _id: false}).toArray(function(err, result) {
  	  if (err) throw err;
  	   console.log(result);
  	   db.close();
    });
  });
  
});