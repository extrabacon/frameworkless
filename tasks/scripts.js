var gulp = require('gulp');
var browserify = require('browserify');
var plumber = require('gulp-plumber');
var merge = require('merge-stream');
var through = require('through2');
var config = require('../config/assets');

module.exports = function () {
  return merge(
    // browserify all scripts in assets/scripts
    gulp.src('assets/scripts/*.js')
      .pipe(plumber())
      .pipe(through.obj(function (file, encoding, next) {
        file.contents = browserify({ debug: true })
          .add(file.path)
          .bundle();
        this.push(file);
        next();
      }))
      .pipe(gulp.dest(config.path + '/js')),
    // move jquery as-is
    gulp.src('bower_components/jquery/dist/*.*')
      .pipe(gulp.dest(config.path + '/js')),
    // move bootstrap as-is
    gulp.src('bower_components/bootstrap/dist/js/*.*')
      .pipe(gulp.dest(config.path + '/js'))
  );
};
