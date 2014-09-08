var mongoose = require('mongoose');
var logger = require('./log');
var config = global.app.config;

// a simple db service acting as a proxy for mongoose
var db = module.exports = {
  mongoose: mongoose
};

/**
 * Establishes a MongoDB connection with Mongoose
 * @param  {String}   name     The name of the connection to open (from config)
 * @param  {Function} callback Fires when the db connection is established
 * @return {Object}            The Mongoose connection instance
 */
db.connect = function (name, callback) {
  if (typeof name === 'function') {
    callback = name;
    name = undefined;
  }
  if (name === 'default') {
    name = undefined;
  }

  if (!name && config.connections.default.debug) {
    mongoose.set('debug', true);
  }

  logger.verbose('Connecting to', config.connections[name || 'default'].uri);

  if (name) {
    db[name] = mongoose.createConnection(
      config.connections[name].uri,
      config.connections[name].options,
      callback
    );
    return db[name];
  } else {
    return mongoose.connect(
      config.connections.default.uri,
      config.connections.default.options,
      callback
    );
  }
};

/**
 * Disconnects all Mongoose connections
 * @param  {Function} callback Fires when all connections are closed
 */
db.disconnect = function (callback) { 
  return mongoose.disconnect(callback);
};

/**
 * Returns a Mongoose model instance
 * @param  {String} name The name of the model to retrieve
 * @return {Object}      The model instance
 */
db.model = function (name) {
  return mongoose.model(name);
};

module.exports = db;
