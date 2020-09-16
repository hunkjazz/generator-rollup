const {
  src,
  dest,
  series,
  parallel
} = require("gulp");

const del = require("del");

const paths = require("../utilities/paths");

const css = require("./css");
const javascript = require("./javascript");
const images = require("./images");
const optimize = require("./optimizer");

/**
 * Private task for cleaning folders.
 * @param {*} [target=paths.env.dev]
 * @returns TaskFunction
 */
function _clean(target = paths.env.dev) {

  function task() { return del([target]) }

  task.displayName = `clean:${target}`;
  
  return task;
}

/**
 * Build app for production.
 * @returns TaskFunction
 */
function release() {

  return series(build(), _clean(`${paths.env.prod}`), optimize());
}

/**
 * Build app.
 * @returns TaskFunction
 */
function build() {

  const build = parallel(
                  series(javascript.compile, javascript.bundle),
                  css.compile, 
                  images.resize,
                  copy()
                );

  return series(_clean(), build);
}

/**
 * Copy files from given glob.
 *
 * @param {string} [label="static"]
 * @param {*} [glob=paths.static]
 * @returns TaskFunction
 */
function copy(label = "static", glob = paths.static) {

  function task() { return src(glob).pipe(dest(paths.env.dev)) }

  task.displayName = `copy:${label}`;
  
  return task;
}

module.exports = {
  release,
  build,
  copy,
  optimize
};
