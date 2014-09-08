var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require('../config/assets');

module.exports = ['assets', function () {
  livereload.listen();
  // monitor source assets to transform
  gulp.watch('assets/images/**/*', ['images']);
  gulp.watch('assets/scripts/**/*.js', ['scripts']);
  gulp.watch('assets/styles/**/*.less', ['stylesheets']);
  gulp.watch('assets/templates/**/*.jade', ['templates']);
  // monitor transformed assets
  gulp.watch(config.path + '/**').on('change', livereload.changed);
  // monitor server-side views
  gulp.watch('views/**/*.jade').on('change', livereload.changed);
}];
