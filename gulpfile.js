var gulp = require('gulp')
var mjml = require('gulp-mjml')

gulp.task('mjml', function () {
  return gulp.src('./test.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})

// Watch All
gulp.task('watch', function() {
    gulp.watch('./test.mjml', gulp.series('mjml'));
});

// Default
gulp.task('default', gulp.parallel('mjml', 'watch'));
