//const express = require('express');
const BOOK = require('../components/book/network');

const ROUTES = function(server) {
    // API routes
    server.use('api/book', BOOK);
}

module.exports = ROUTES;