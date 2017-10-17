var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
  });

gulp.task('default',['sass']);
