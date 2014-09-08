var express = require('express');

var routes = module.exports = express.Router();
var responses = global.app.middleware.responses;
routes.get('/', responses.renderView('home'));
