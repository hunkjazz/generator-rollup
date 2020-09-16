const { series, watch } = require("gulp");

const options = require("../utilities/options");
const paths = require("../utilities/paths");

const browserSync = require("browser-sync").create();

const images = require("./images");
const sass = require("./sass");
const { copy } = require("./builder");
const { compileTS } = require("./tsCompiler");
const { bundleJS } = require("./jsBundler");

function watchTasks() {

  const watchTS = watch("src/ts/**/*.ts");
  const watchSass = watch("src/scss/**/*.scss");
  const watchImages = watch("src/assets/img/**/*");
  const watchStatic = watch(paths.static);

  browserSync.init(options.browserSync.init);

  watchSass.on("all", sass.compile);
  watchTS.on("all", series(compileTS, bundleJS, browserSync.reload));
  watchImages.on("all", series(images.resize, browserSync.reload));
  watchStatic.on("all", series(copy(), browserSync.reload));
}

module.exports = {
  watchTasks
};
