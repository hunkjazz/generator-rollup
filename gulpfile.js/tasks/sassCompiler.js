const { src, dest } = require('gulp');

const { browserSync } = require('../modules/browserSync');

const { 
  sass,
  sourcemaps
} = require('../plugins/plugins.manifest');

sass.compiler = require('node-sass');

function compileSass() {

  const glob = './src/scss/**/*.scss';
  
  const sassResult = src(glob)
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
