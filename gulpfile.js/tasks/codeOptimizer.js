const { src, dest } = require('../utilities/api');
const { options } = require('../utilities/options');

const { 
  useref,
  gulpIf,
  uglify,
  htmlmin,
  purgecss
} = require('../plugins/plugins.manifest');

const { postcss } = require('../plugins/postcss');

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
