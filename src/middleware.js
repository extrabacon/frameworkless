var includeAll = require('include-all');

exports.express = {
  cookieParser: require('cookie-parser'),
  session: require('express-session'),
  bodyParser: require('body-parser'),
  compression: require('compression'),
  serveStatic: require('serve-static'),
  csrf: require('csurf'),
  logger: require('morgan'),
  errorhandler: require('errorhandler')
};

exports.policies = includeAll({
  dirname: __dirname + '/policies',
  filter: /^(.+).js$/
});

exports.responses = includeAll({
  dirname: __dirname + '/responses',
  filter: /^(.+).js$/
});

exports.controllers = includeAll({
  dirname: __dirname + '/controllers',
  filter: /^(.+)Controller\.js$/i
});
