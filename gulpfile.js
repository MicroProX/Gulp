'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
	scss = require('gulp-sass');
	
gulp.task('sass', function() {
	return gulp.src('websites/WebSite4/sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('websites/WebSite4/css'))
});

gulp.task('watch:sass', function() {
	gulp.watch('websites/WebSite4/sass/**/*.sass', gulp.series ('sass'));
});

gulp.task('scss', function() {
	return gulp.src('websites/WebSite4/scss/**/*.scss')
	.pipe(scss().on('error', scss.logError))
	.pipe(gulp.dest('websites/WebSite4/css'))
});

gulp.task('watch:scss', function() {
	gulp.watch('websites/WebSite4/scss/**/*.scss', gulp.series ('scss'));
});