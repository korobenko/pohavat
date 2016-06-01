var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
 
var css = [
    'public/css/grid.css',
    'public/css/dropdown.css',
    'public/css/popup.css',
    'public/css/style.css'
];

var js = [
    'public/js/jquery.js',
    'public/js/dropdown.js',
    'public/js/popup.js',
    'public/js/footer.js',
    'public/js/script.js'
];

gulp.task('sass', function () {
    return sass('public/css/*.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('public/css/'));
});

gulp.task('styles', function () {
    gulp.src(css)
        .pipe(sourcemaps.init())
        .pipe(concat("all.css"))
        .pipe(minifyCSS())
        .pipe(rename("all.min.css"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('builds/css/'));
});

gulp.task('scripts', function () {
    gulp.src(js)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('builds/js/'));
});

gulp.task('watch', function () {
    gulp.watch('public/css/*.scss', ['sass']);
    gulp.watch(css, ['styles']);
    gulp.watch(js, ['scripts']);
});

gulp.task('default', ['sass', 'styles', 'scripts', 'watch']);