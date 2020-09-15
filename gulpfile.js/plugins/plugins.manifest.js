// Official Gulp plugins
const sourcemaps = require('gulp-sourcemaps');
const responsive = require('gulp-responsive');
const purgecss = require('gulp-purgecss');
const ghPages = require('gulp-gh-pages');
const htmlmin = require('gulp-htmlmin');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const cache = require('gulp-cache');
const sass = require('gulp-sass');
const gulpIf = require('gulp-if');

const { postcss, autoprefixer, cssnano } = require('./postcss');
const { imagemin, imageminPngquant } = require('./imagemin');

module.exports = {
  // Official
  sourcemaps,
  htmlmin,
  ts,
  uglify,
  useref,
  cache,
  sass,
  gulpIf,
  postcss,
  imagemin,
  responsive,
  purgecss,
  ghPages,
  // Third party dependency plugins
    // PostCSS
    autoprefixer,
    cssnano,
    // ImageMin
    imageminPngquant
}