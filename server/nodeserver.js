const express = require('express');
const app = express();
const thing = require('./api/thing.js');
const bodyParser = require('body-parser');
const dbService = require('./api/mongo-service');

var server;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/thing', thing);

app.use(express.static('../client/build'));

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);


dbService.init()
.then(() => {
 
    server = app.listen(3000, function() {
        console.log('Example app listening on port 3000!');
      });
    
});

function cleanup() {
    console.log("Close DB!!");
    dbService.close()
    .then(()=> {
        console.log("Database closed!!");
        server.close(function() {
            console.log("Closed out remaining server connections.");
            process.exit()
          });
    });
}

