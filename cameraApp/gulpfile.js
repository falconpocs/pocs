var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);
gulp.task('upload:before', ['build']);
