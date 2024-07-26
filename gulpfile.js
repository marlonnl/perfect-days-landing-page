const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// minificação do JS
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'));
}

// compilação e minificação do SASS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass( { outputStyle: 'compressed' } ))
        .pipe(gulp.dest('./dist/css'));
}

// minificação das imagens
function minImages() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(scripts, styles, minImages);

// watch function
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}