var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var config = require('../config/assets');

module.exports = function () {
  return gulp.src('assets/styles/*.less')
    .pipe(plumber())
    .pipe(less({ compress: false }))
    .pipe(autoprefixer('last 1 version', '> 1%', { cascade: true }))
    .pipe(gulp.dest(config.path + '/css'));
};
