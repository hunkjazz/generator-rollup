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

function _clean(target = "build") {

  function task() { return del([target]) }

  task.displayName = `clean:${target}`;
  
  return task;
}

function release() {

  return series(build(), _clean("dist"), optimize());
}

function build() {

  const build = parallel(
                  series(javascript.compile, javascript.bundle),
                  css.compile, 
                  images.resize,
                  copy()
                );

  return series(_clean(), build);
}

function copy(label = "static", glob = paths.static) {

  function task() { return src(glob).pipe(dest("build")) }

  task.displayName = `copy:${label}`;
  
  return task;
}

module.exports = {
  release,
  build,
  copy,
  optimize
};
