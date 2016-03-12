var gulp = require('gulp');
var mjml = require('gulp-mjml');

gulp.task('mjml', function () {
  gulp.src('./test.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
});

// Watch All
gulp.task('watch', function() {
  gulp.watch('./test.mjml', ['mjml']);
});

// Default
gulp.task('default', ['mjml', 'watch']);
