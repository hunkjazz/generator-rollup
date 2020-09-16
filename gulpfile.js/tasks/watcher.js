const { series, watch } = require("gulp");

const options = require("../utilities/options");
const paths = require("../utilities/paths");

const BrowserSync = require("browser-sync");

const images = require("./images");
const css = require("./css");
const javascript = require("./javascript");
const { copy } = require("./builder");

const browsersync = BrowserSync.create();

function typescript(serve = false) {

  const watcher = watch("src/ts/**/*.ts");
  
  watcher.on("all", series(javascript.compile, javascript.bundle, browsersync.reload));

  if(serve) browsersync.init(options.browsersync.init);
}

function sass(serve = false) {
  
  const watcher = watch("src/scss/**/*.scss");

  watcher.on("all", css.compile);

  if(serve) browsersync.init(options.browsersync.init);
}

function image(serve = false) {

  const watcher = watch("src/assets/img/**/*");

  watcher.on("all", series(images.resize, browsersync.reload));

  if(serve) browsersync.init(options.browsersync.init);
}

function static(serve = false) {

  const watcher = watch(paths.static);

  watcher.on("all", series(copy(), browsersync.reload));

  if(serve) browsersync.init(options.browsersync.init);
}

function all(serve = true) {
  
  typescript();
  static();
  image();
  sass();

  if(serve) browsersync.init(options.browsersync.init);
}

module.exports = {
  typescript,
  sass,
  image,
  static,
  all
};
