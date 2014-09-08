var _ = require('lodash');
var rc = require('rc');
var includeAll = require('include-all');

var configPath = __dirname + '/../config';

var config = module.exports = includeAll({
  dirname: configPath,
  filter: /^(.+)\.js$/,
  excludeDirs: /^(env|locales)$/
});

// load environment-specific settings
var envName = process.env.NODE_ENV || 'development';
var envConfig = includeAll({
  dirname: configPath + '/env',
  filter: new RegExp('^(' + envName + ')\\.js$'),
  optional: true
});
_.assign(config, envConfig[envName]);

// override with local settings
if (config.local) {
  _.assign(config, config.local);
  delete config.local;
}

// rc overrides
var appName = require('../package.json').name;
_.assign(config, rc(appName));
