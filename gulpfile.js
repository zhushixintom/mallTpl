var gulp = require('gulp');
var concat = require('gulp-concat');
var header = require('gulp-header');
var connect = require("gulp-connect");
var less = require("gulp-less");
var autoprefixer = require('gulp-autoprefixer');
var ejs = require("gulp-ejs");
var uglify = require('gulp-uglify');
var ext_replace = require('gulp-ext-replace');
var cssmin = require('gulp-cssmin');

// var pkg = require("./package.json");

// var banner =
// "/** \n\
// * jQuery WeUI V" + pkg.version + " \n\
// * By 言川\n\
// * http://lihongxun945.github.io/jquery-weui/\n \
// */\n";


gulp.task('less', function () {
  return gulp.src(['./src/less/style.less'])
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css/'));
});

gulp.task('cssmin', ["less"], function () {
  gulp.src(['./css/style.css'])
  // gulp.src(['./css/*.css', '!./css/*.min.css'])
    .pipe(cssmin())
    .pipe(ext_replace('.min.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('ejs', function () {
  return gulp.src(["./demos/*.html", "!./demos/_*.html"])
    .pipe(ejs({}))
    .pipe(gulp.dest("./"));
});

// gulp.task('copy', function() {
//   gulp.src(['./src/lib/**/*'])
//     .pipe(gulp.dest('./dist/lib/'));

//   gulp.src(['./demos/images/*.*'])
//     .pipe(gulp.dest('./dist/demos/images/'));

//   gulp.src(['./demos/css/*.css'])
//     .pipe(gulp.dest('./dist/demos/css/'));
// });

gulp.task('watch', function () {
  gulp.watch('src/less/**/*.less', ['less']);
  gulp.watch('demos/*.html', ['ejs']);
  // gulp.watch('demos/css/*.css', ['copy']);
});

gulp.task('server', function () {
  connect.server();
});
gulp.task("default", ['less', 'cssmin', 'ejs']);
