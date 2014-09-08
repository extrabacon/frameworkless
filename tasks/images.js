var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var config = require('../config/assets');

module.exports = function () {
  return gulp.src('assets/images/**/*')
    .pipe(imagemin({
      optimizationLevel: 7
    }))
    .pipe(gulp.dest(config.path + '/images'));
};
