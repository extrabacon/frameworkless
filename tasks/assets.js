var gulp = require('gulp');
var merge = require('merge-stream');
var config = require('../config/assets');

module.exports = [
  'stylesheets',
  'scripts',
  'templates',
  'images',
  function moveStaticBowerComponents() {
    return merge(
      gulp.src('bower_components/bootstrap/dist/fonts/*.*')
        .pipe(gulp.dest(config.path + '/fonts')),
      gulp.src('bower_components/font-awesome/fonts/*.*')
        .pipe(gulp.dest(config.path + '/fonts'))
    );
  },
  function moveStaticAssets() {
    return gulp.src([
        // copy static assets without any transformation
        'assets/**/*',
        // exclude assets with transformations
        '!assets/images',
        '!assets/images/**/*',
        '!assets/scripts',
        '!assets/scripts/**/*',
        '!assets/styles',
        '!assets/styles/**/*',
        '!assets/templates',
        '!assets/templates/**/*'
      ])
      .pipe(gulp.dest(config.path));
  }
];
