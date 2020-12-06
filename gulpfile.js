const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const htmlmin = require('gulp-htmlmin');

const cssfiles = [
  './src/css/style.css',
  './src/css/media.css',
]
const jsfiles = [
  './src/js/script.js',
  './src/js/bodyScrollLock.js',
  './src/js/jquery-3.5.1.min.js',
  './src/js/jquery.inputmask.min.js',
  './src/js/jquery.validate.min.js',
  './src/js/modal.js',
  './src/js/form.js'
]

function styles() {
  return gulp.src(cssfiles)
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/css/'))
}

function scripts() {
  return gulp.src(jsfiles)
    .pipe(concat('all.js'))
    .pipe(uglify({
      toplevel: true,
    }))
    .pipe(gulp.dest('./build/js/'))
}

function html() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build/'));
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);