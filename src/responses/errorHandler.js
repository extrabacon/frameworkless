var _ = require('lodash');
var logger = global.app.log;

/* jshint unused:vars */
module.exports = function errorHandler(err, req, res, next) {

  var statusCode;

  try {

    logger.error(err);

    // inspect well-known errors
    if (err.name === 'ValidationError') {
      err.status = 400;
      err.details = {
        name: 'ValidationError',
        message: 'Validation failed',
        errors: _.map(err.errors, function (error) {
          return {
            message: error.message,
            path: error.path,
            value: error.value
          };
        })
      };
    }

    statusCode = err.status || res.statusCode || 500;

    if (statusCode === 403) {
      respond('403');
    } else if (statusCode === 404) {
      respond('404');
    } else if (statusCode >= 400 && statusCode < 500) {
      respond('400');
    } else {
      respond('500');
    }

  } catch (err2) {
    logger.error('Unhandled error in errorHandler middleware:', err2);
    err = null;
    respond('500');
  }

  function respond(view) {

    var data;
    if (process.env.NODE_ENV === 'development') {
      // in development, allow full rendering of the exception
      data = err;
    } else {
      // only allow err.details to be rendered
      data = err.details || {
        name: 'ServerError',
        message: 'An unexpected error has occurred, please try again later'
      };
    }

    res.status(statusCode);

    if (req.is('json')) {
      res.json(err);
    } else {
      res.render(view, { data: data });
    }

  }
};
