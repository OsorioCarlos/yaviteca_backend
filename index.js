// Import the libraries
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');

// Import files
const ROUTER = require('./network/routes');
const CONFIG = require('./config');

// Instance a new server
var app = EXPRESS();

// Define content-type JSON and Access-Control-Allow-Origin
app.use(BODY_PARSER.json());
app.use(CORS());

// Listening the server!
app.listen(CONFIG.server.port, function () {
  console.log(`Yaviteca API listening on port ${CONFIG.server.port}!`);
});

// Configure router with app
ROUTER(app);
