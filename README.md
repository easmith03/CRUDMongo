# CRUDMongo
Mongo DB and NodeJs test

Mongo code based on tutorial from https://www.w3schools.com/nodejs/nodejs_mongodb.asp

React code based on code school React Tutorial, plus React Router code from https://www.tutorialspoint.com/reactjs/reactjs_router.htm

Basic CRUD app functionality.


# One time operations
* Install Nodejs and NPM  https://nodejs.org/en/download/
* Install MongoDB Community server https://www.mongodb.com/download-center#community
* Clone this repo
* cd ./CRUDMongo/server/db
* mkdir data
* Edit startdb.bat file to point to the installation of Mongo
* Open a new command window - leave this window open while the mongodb is up and running.
* cd ./CRUDMongo/server/db
* run-> startdb.bat
* Open a new command window 
* cd ./CRUDMongo/client
* run-> npm update  (may take a few minutes - installing packages from the package.json file - creates directory node-modules)
* npm run build (creates build directory - "production" version of the client)
* cd ../server
* run-> npm update  (may take a few minutes - installing packages from the package.json file - creates directory node-modules)
* cd db
* run-> node create_collection_thing.js
* You should see a "collection created" message in the command window.  
* You can close the window. 

# To bring up the application
* Start up Mongo if not already running - Open a new command window
* cd ./CRUDMongo/server/db
* run-> startdb.bat
* Start up the API server. run-> node nodeserver.js
* You should see a message that app is listening on port 3000
* Leave this window up as long as you want the app to be running.
* Open up a web browser.  go to localhost:3000
* In the left nav bar go to the "List of Things" to see the things you have entered.
* In the left nav bar go to the "Add new Thing" to add a new thing.

# When updating client
* Each time you change a client file You need to go to the client directory and run-> npm run build
* You may need to do multiple refreshes in the browser window to see the changes

# When updating server
* Each time you change a server file You need to go to the server directory and stop and run-> node nodeserver.js



