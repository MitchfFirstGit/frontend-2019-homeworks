const gulp = require('gulp'); // npm install gulp, sudo npm install gulp -g
const sass = require('gulp-sass'); //npm install  gulp-sass --save-dev
const watch = require('gulp-watch'); // npm install --save-dev gulp-watch
const nano = require('gulp-cssnano'); // npm install gulp-cssnano --save-dev
gulp.task('sass-compile', function() {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(nano())
        .pipe(gulp.dest('./css/'))
})

gulp.task('watch', function() {
    gulp.watch('./scss/main.scss', gulp.series('sass-compile'))
})
