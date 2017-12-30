var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

var JS_SOURCE = 'src/js';
var JS_DEST = 'dist/js';
var JS_OUTPUT_FILE = 'main.js';
var CSS_SOURCE = 'src/styles';
var CSS_DEST = 'dist/styles';

gulp.task('scripts', function() {
  return gulp.src(JS_SOURCE + '/**/*.js')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        generator.emit('end');
    }}))
    .pipe(gulp.dest(JS_DEST + '/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(JS_DEST + '/'))
});

gulp.task('styles', function() {
  gulp.src(CSS_SOURCE + '/**/*.scss')
    .pipe(plumber({
      errorHandler: function(error) {
        console.log(error.message);
        generator.emit('end');
    }}))
    .pipe(sass())
    .pipe(gulp.dest(CSS_DEST + '/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(CSS_DEST + '/'))
});

gulp.task('default', function() {
  gulp.watch(JS_SOURCE + '/**/*.js', ['scripts']);
  gulp.watch(CSS_SOURCE + '/**/*.scss', ['styles']);
});
