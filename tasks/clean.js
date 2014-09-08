var rimraf = require('rimraf');

module.exports = function (callback) {
  rimraf('.tmp', callback);
};
