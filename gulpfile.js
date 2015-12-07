'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso');
    
var bc = 'app/bower_components/';


gulp.task('html', function() {
  gulp.src('builds/development/**/*.html')
    .pipe(gulp.dest('../laravel/public/fitness/'))
});

gulp.task('sass', function () {
  gulp.src('builds/development/sass/**/*')
      .pipe(sass())
      .pipe(concat('style.min.css'))
      .pipe(csso())
      .pipe(gulp.dest('../laravel/public/fitness/css/'));
});

gulp.task('img', function() {
  gulp.src('builds/development/img/**/*')
    .pipe(gulp.dest('../laravel/public/fitness/img/'));
});
gulp.task('app', function() {
    gulp.src('builds/development/app/**/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('../laravel/public/fitness/app'))
});
gulp.task('watch', function() {
  gulp.watch('builds/development/app/**/*.js', ['app']);
  gulp.watch('builds/development/sass/**/*.scss', ['sass']);
  gulp.watch('builds/development/**/*.html', ['html']);
  gulp.watch('builds/development/img/**/*', ['img']);
});

gulp.task('libs', function() {
  gulp.src(bc+'jquery/dist/jquery.js')
      .pipe(gulp.dest('./../laravel/public/fitness/libs/jquery/'));

  gulp.src(bc+'bootstrap/dist/**/*.*')
      .pipe(gulp.dest('./../laravel/public/fitness/libs/bootstrap/'));

  gulp.src(bc+'bootstrap-material-design/dist/**/*.*')
      .pipe(gulp.dest('./../laravel/public/fitness/libs/bootstrap-material-design/'));

  gulp.src([bc+'angular/angular.js',
//            bc+'angular-animate/angular-animate.js',
//            bc+'angular-cookies/angular-cookies.js',
//            bc+'angular-bootstrap/ui-bootstrap.js',
//            bc+'angular-i18n/angular-locale_ru-ru.js',
            bc+'angular-loader/angular-loader.js',
//            bc+'angular-resource/angular-resource.js',
            bc+'angular-route/angular-route.js',
//            bc+'angular-sanitize/angular-sanitize.js',
//            bc+'angular-touch/angular-touch.js',
//            bc+'firebase/firebase.js',
//            bc+'angularfire/dist/angularfire.js',
          ])
      .pipe(concat('angular.concat.js'))
      .pipe(gulp.dest('prod/laravel/public/fitness/libs/angular/'));
});

gulp.task('webserver', function() {
  gulp.src('../laravel/public/fitness/')
      .pipe(webserver({
        livereload: true,
        open: true
      }));
});

gulp.task('default', [
    'libs',
    'html',
    'img',
//  'js',
    'app',
    'sass'
//  'webserver',
]);
