var gulp = require("gulp");
var sassGraph = require('sass-graph');
var sass = require("gulp-sass");
var slim = require("gulp-slim");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var cmq = require('gulp-combine-media-queries');
var uglify = require("gulp-uglify");
var cache = require('gulp-cached');


gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./htdocs/dist/"
    }
  });
});

gulp.task('cmq', function() {
  gulp.src('./htdocs/dist/css/**/*css')
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest('./htdocs/dist/css'));
});

gulp.task('slim', function(){
  gulp.src('./slim/**/*slim')
    .pipe(plumber())
    .pipe(slim({
      pretty: true
    }))
    .pipe(gulp.dest("./htdocs/dist/"));
});


gulp.task("sass", function() {
  gulp.src("./sass/**/*scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cache())
    .pipe(gulp.dest("./htdocs/dist/css"))
    .pipe(browser.reload({
      stream: true
    }));
});

gulp.task("js", function() {
  gulp.src(["./js/**/*.js", "!./js/min/**/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("./htdocs/dist/js"))
    .pipe(browser.reload({
      stream: true
    }));
});

gulp.task('watch-sass', function(cb) {
  return watch({
      glob: './sass/**/*scss',
      emitOnGlob: false,
      name: "Sass"
    })
    .pipe(sassGraph(sassLoadPaths))
    .pipe(sass({
      loadPath: sassLoadPaths
    }))
    .pipe(notify('Sass compiled <%= file.relative %>'))
    .pipe(gulp.dest('./htdocs/dist/css'));
});

gulp.task("default", ['server'], function() {
  gulp.watch(["./js/**/*.js", "!js/min/**/*.js"], ["js"]);
  gulp.watch("./sass/**/*.scss", ["sass"]);
  gulp.watch("./htdocs/dist/css/**/*css", ["cmq"]);
  gulp.watch(['./slim/**/*slim'],['slim']);
});
