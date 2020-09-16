const {
  src,
  dest,
  series,
  parallel
} = require("gulp");

const del = require("del");

const paths = require("../utilities/paths");

const { runOptmizer } = require("./optmizer");
const { generateCode } = require("./codeGenerator");
const { resizeImages } = require("./imageResizer");

function _clean(target = "build") {

  function task() { return del([target]) }

  task.displayName = `clean:${target}`;
  
  return task;
}

function release() {

  return series(build(), _clean("dist"), runOptmizer);
}

function build() {

  const build = parallel(
    generateCode,
    copy(),
    resizeImages
  );

  return series(_clean(), build);
}

function copy(label = "static", glob = paths.static) {

  function task() { return src(glob).pipe(dest("build/")) }

  task.displayName = `copy:${label}`;
  
  return task;
}

module.exports = {
  release,
  build,
  copy
};
