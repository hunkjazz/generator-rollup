const { src, dest } = require('../utilities/api');

const { browserSync } = require('../modules/browserSync');

const { 
  sass,
  sourcemaps
} = require('../plugins/plugins.manifest');

sass.compiler = require('node-sass');

function compileSass() {
  const sassResult = src('./src/scss/**/*.scss')
                      .pipe(sourcemaps.init())
                      .pipe(sass().on('error', sass.logError))
                      .pipe(sourcemaps.write('./'));

  return sassResult
          .pipe(dest('./build/css'))
          .pipe(browserSync.stream());
}

module.exports = {
  compileSass
};
