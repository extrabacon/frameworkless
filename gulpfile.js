// This is a generic Gulpfile where tasks are dynamically loaded from the
// "tasks" directory. To register a new task, add a file in the directory.

var gulp = require('gulp');
var gutil = require('gulp-util');
var resolve = require('path').resolve;
var includeAll = require('include-all');

function loadTasks(relPath) {
  return includeAll({
    dirname: resolve(__dirname, relPath),
    filter: /(.+)\.js$/
  }) || {};
}

function mountTask(name, task) {
  var args = [name];
  if (Array.isArray(task)) {
    var deps = task.filter(function (e) {
      return typeof e === 'string';
    });
    if (deps.length) {
      args.push(deps);
    }
    var fn = task.filter(function (e) {
      return typeof e === 'function';
    });
    if (fn.length) {
      args.push(fn[0]);
    }
  } else if (typeof task === 'function') {
    args.push(task);
  } else {
    gutil.log('Ignored task', gutil.colors.cyan(name) + ': not a valid task');
    return null;
  }
  return gulp.task.apply(gulp, args);
}

// Load all tasks dynamically from the "tasks" directory
var tasks = loadTasks('./tasks');
/* jshint forin:false */
for (var taskName in tasks) {
  mountTask(taskName, tasks[taskName]);
}
