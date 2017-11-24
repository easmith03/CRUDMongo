var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = { name: "Josh Vaughn", address: "Highway 32" };
  db.collection("people").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("inserted: ", res);
    db.close();
  });

});