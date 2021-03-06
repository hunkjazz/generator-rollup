// Utilities
const { series, watch } = require('../utilities/api');
const { options } = require('../utilities/options');

// Modules
const { browserSync } = require('../modules/browserSync');

// Dependency tasks
const { resizeImages } = require('./imageResizer');
const { compileSass } = require('./sassCompiler');
const { copyStaticFiles } = require('./builder');
const { pathTo } = require('../utilities/paths');
const { compileTS } = require('./tsCompiler');
const { bundleJS } = require('./jsBundler');

// Main task
function watchTasks() {
  const watchTS = watch('src/ts/**/*.ts');
  const watchSass = watch('src/scss/**/*.scss');
  const watchImages = watch('src/assets/img/**/*');
  const watchStatic = watch(pathTo.staticFiles);

  browserSync.init(options.browserSync.init);

  watchSass.on('all', compileSass);
  
  watchTS.on('all', series(compileTS, bundleJS, browserSync.reload));

  watchImages.on('all', series(resizeImages, browserSync.reload));
  
  watchStatic.on('all', series(copyStaticFiles, browserSync.reload));
}

module.exports = {
  watchTasks
};