const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const maps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

function comprimeJS(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
}

function compilaSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(maps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(maps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}



exports.default = function(){
    gulp.watch('./src/styles/*.scss', {ignoreInital: false}, gulp.series(compilaSass));
    gulp.watch('./src/js/*.js', {ignoreInital: false}, gulp.series(comprimeJS));
}
