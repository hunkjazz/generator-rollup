const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const cache = require('gulp-cache');
const sass = require('gulp-sass');
const responsive = require('gulp-responsive');
const purgecss = require('gulp-purgecss');
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');

const {
  autoprefixer,
  cssnano,
  postcss
} = require('./postcss');

const { imagemin, pngquant } = require('./imagemin');

module.exports = {
  sourcemaps,
  ts,
  cache,
  sass,
  htmlmin,
  uglify,
  useref,
  gulpIf,
  postcss,
  responsive,
  purgecss,
  ghPages,
  autoprefixer,
  cssnano,
  imagemin,
  pngquant
}
