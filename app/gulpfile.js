// var config = require('require-dir')('gulp-config');
// var $ = require('gulp-recipe-loader')(require('gulp'), config);
//
// $.gulp.task('default', ['serve']);


// --- browsersync -- thing ---

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

var plugins = require('gulp-load-plugins')(); //++++


// Static Server + watching scss/html files
gulp.task('serve', ['sass'
    , 'js-watch'
], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("app/../*.scss", ['sass']);
    gulp.watch("app/../*.html").on('change', browserSync.reload);
    gulp.watch("app/../*.js", ['js-watch'], browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/*.scss")
        .pipe(sass({errorLogToConsole: true}))
        .pipe(gulp.dest("app"))
        .pipe(browserSync.stream());
});
//
gulp.task('default', ['serve']);
//


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch',
    // ['js'],
    function (done) {
    browserSync.reload();
    done();
});

