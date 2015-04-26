var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var coffee = require('gulp-coffee');

gulp.task('default', ['test', 'watch']);

gulp.task('test', function () {
  gulp.src('dist-spec/*.js')
  .pipe(jasmine());
});

gulp.task('coffee-src', function() {
  gulp.src('src/*.coffee')
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(gulp.dest('dist'))
});

gulp.task('coffee-src-spec', function() {
  gulp.src('src-spec/*.coffee')
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(gulp.dest('dist-spec'))
});

gulp.task('watch', function() {
  gulp.watch('src/*.coffee', ['coffee-src']);
  gulp.watch('src-spec/*.coffee', ['coffee-src-spec']);
  gulp.watch(['dist-spec/*.js', 'dist/*.js'], ['test']);
});