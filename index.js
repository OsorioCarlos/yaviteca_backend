// Import the libraries
const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const ROUTER = require('./network/routes');
const CONFIG = require('./config');
//const cors = require('cors');

// Instance a new server
var app = EXPRESS();

// Define content-type JSON
app.use(BODY_PARSER.json());
//app.use(cors());

// Listening the server!
app.listen(CONFIG.server.port, function () {
  console.log(`Yaviteca API listening on port ${CONFIG.server.port}!`);
});

// Configure router with app
ROUTER(app);
