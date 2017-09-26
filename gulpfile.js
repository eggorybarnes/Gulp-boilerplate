var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var ejs = require("gulp-ejs");
var plumber = require('gulp-plumber');

gulp.task('ejs', function () {
    return gulp.src('app/pages/*.ejs')
        .pipe(plumber())
        .pipe(ejs({}, {}, {
            ext: '.html'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('ejs-watch', ['ejs'], (done) => {
    browserSync.reload();
    done();
})

gulp.task('js', function () {
    return gulp.src(['app/js/**/*']).pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], (done) => {
    browserSync.reload();
    done();
})


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'ejs'], function () {

    browserSync.init({
        server: "dist/"
    });

    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/pages/**/*.ejs", ['ejs-watch']);
    gulp.watch("app/js/*.js", ['js-watch']);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("app/scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "dist/"
        }
    });
});