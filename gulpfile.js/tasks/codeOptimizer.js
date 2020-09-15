// Utilities
const { src, dest } = require('../utilities/api');
const { options } = require('../utilities/options');

// Plugins
const { 
  useref,
  gulpIf,
  uglify,
  htmlmin,
  purgecss
} = require('../plugins/plugins.manifest');

const { postcss } = require('../plugins/postcss');

// Main task
function optimizeCode() {

  return src('build/*.html')
          .pipe(useref())
          .pipe(gulpIf('*.js', uglify()))
          .pipe(gulpIf('*.css', purgecss(options.purgecss)))
          .pipe(gulpIf('*.css', postcss(options.postcssPlugins)))
          .pipe(gulpIf('*.html', htmlmin(options.htmlmin)))
          .pipe(dest('dist'));
}

module.exports = {
  optimizeCode
};
