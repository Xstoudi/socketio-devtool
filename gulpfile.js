const gulp       = require('gulp')
const browserify = require('browserify')
const babelify   = require('babelify')
const gLess      = require('gulp-less')
const source     = require('vinyl-source-stream')
const path       = require('path')

gulp.task('ecmascript', () => {
    browserify({
        entries: './src/js/index.jsx',
        debug: true
    })
        .transform('babelify', { presets: ['stage-3', 'latest', 'react'] })
        .bundle()
        .on('error', console.log)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/'));
})

gulp.task('less', () => {
    return gulp.src('./src/less/**/*.less')
        .pipe(gLess({
            paths: [path.join(__dirname, 'public')]
        }))
        .pipe(gulp.dest('./public'))
})

gulp.task('watch', ['default'], function() {
    gulp.watch('./src/js/**/*.{js,jsx}', ['ecmascript'])
    gulp.watch('./src/less/**/*.less', ['less'])
})

gulp.task('default', ['ecmascript', 'less'])