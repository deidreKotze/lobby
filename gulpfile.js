var gulp = require('gulp');

var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('lobby')	// <-- your app folder
      .pipe(server({
        livereload: true,
        open: true,
        port: 6000	// set a port to avoid conflicts with other local apps
      }));
  });

  gulp.task('default', ['server']);



  var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});