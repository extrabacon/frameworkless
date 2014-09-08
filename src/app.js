var _ = require('lodash');
var includeAll = require('include-all');
var config = require('./config');

// expose app globally
var app = module.exports = {};
global.app = app;
app.config = config;

// load services
_.assign(app, includeAll({
  dirname: __dirname + '/services',
  filter: /^(.+)\.js$/
}));

// load models
app.models = includeAll({
  dirname: __dirname + '/models',
  filter: /(.+Model)\.js$/
});

// load express middleware
app.middleware = require('./middleware');

app.mount = function (root) {
  app._express = root || require('./routes/bootstrap');
  return app._express;
};

app.start = function (port) {
  app.db.connect();
  if (!app._express) app.mount();
  port = port || config.port || 3000;
  app._express.listen(port);
  app.log.verbose('Express server listening on port', port);
  return app._express;
};
