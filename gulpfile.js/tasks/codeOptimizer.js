const { src, dest } = require('gulp');

const options = require('../utilities/options');

const postcss = require('gulp-postcss');
const purgecss = require('gulp-purgecss');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');

function optimizeCode() {

  const glob = 'build/*.html';

  return src(glob)
          .pipe( useref() )
          .pipe( gulpIf('*.js', uglify()) )
          .pipe( gulpIf('*.css', purgecss(options.purgecss)) )
          .pipe( gulpIf('*.css', postcss(options.postcssPlugins)) )
          .pipe( gulpIf('*.html', htmlmin(options.htmlmin)) )
          .pipe( dest('dist') );
}

module.exports = {
  optimizeCode
};
