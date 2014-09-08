var gulp = require('gulp');
var jade = require('gulp-jade');
var config = require('../config/assets');

module.exports = function () {
  return gulp.src('assets/templates/**/*.jade')
    .pipe(jade({
      client: false,
      doctype: 'html'
    }))
    .pipe(gulp.dest(config.path + '/templates'));
};
