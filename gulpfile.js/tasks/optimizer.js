const {
  src,
  dest,
  parallel
} = require("gulp");

const postcss = require("gulp-postcss");
const purgecss = require("gulp-purgecss");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const useref = require("gulp-useref");
const gulpIf = require("gulp-if");

const images = require("./images");
const options = require("../utilities/options");
const paths = require("../utilities/paths");

/**
 * Minify everything code-related.
 * @returns NodeJS.ReadWriteStream
 */
function code() {
  
  let glob = `${paths.env.dev}/*.html`;

  return src(glob)
          .pipe( useref() )
          .pipe( gulpIf("*.js", uglify()) )
          .pipe( gulpIf("*.css", purgecss(options.purgecss)) )
          .pipe( gulpIf("*.css", postcss(options.postcssPlugins)) )
          .pipe( gulpIf("*.html", htmlmin(options.htmlmin)) )
          .pipe( dest(`${paths.env.prod}`) );
}

/**
 * Optimize everything.
 * @returns
 */
function optimize() {

  return parallel(images.optimize, code)
}

code.displayName = "optimize:code";

module.exports = optimize;
