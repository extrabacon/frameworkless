var express = require('express');

var app = module.exports = express();
var config = global.app.config;
var middleware = global.app.middleware;

app.set('view engine', 'jade');
app.set('views', process.cwd() + '/views');

// Cookie parsing, populates `req.cookies`
app.use(middleware.express.cookieParser());

// Session support
app.use(middleware.express.session(config.session));

// URL-encoded body parsing
app.use(middleware.express.bodyParser.urlencoded({
  extended: true
}));

// HTTP compression
if (config.http.compress) {
  if (config.http.compress === true) {
    // use defaults
    app.use(middleware.express.compression());
  } else {
    // apply options
    app.use(middleware.express.compression(config.http.compress));
  }
}

// Application routing
app.use(require('./routes'));

// Serve static files
app.use(middleware.express.serveStatic(config.assets.path, config.assets.options));

// Error handler
app.use(middleware.responses.errorHandler);

// Not found handler
app.use(middleware.responses.notFound());

// Error handler
if (process.env.NODE_ENV === 'development') {
  app.use(middleware.express.errorhandler());
}

return app;
