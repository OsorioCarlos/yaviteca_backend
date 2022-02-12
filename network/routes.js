//const express = require('express');
const BOOK = require('../components/book/network');
const LOAN = require('../components/loan/network'); 
const STATE = require('../components/state/network');
const CONSERVATION_STATUS = require('../components/conservation_status/network');

const ROUTES = function(server) {
    // API routes
    server.use('/api/book', BOOK);
    server.use('/api/loan', LOAN);
    server.use('/api/state', STATE);
    server.use('/api/conservation_status', CONSERVATION_STATUS);
}

module.exports = ROUTES;