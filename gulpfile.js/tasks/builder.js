const {
  src,
  dest,
  series,
  parallel
} = require("gulp");

const paths = require("../utilities/paths");

const { generateCode } = require("./codeGenerator");
const { cleanBuild } = require("./folderCleaner");
const { resizeImages } = require("./imageResizer");

function copyStaticFiles() {

  const glob = paths.static;

  return src(glob).pipe( dest("build/") );
}

const buildFiles = series(
                    cleanBuild, 
                    parallel(copyStaticFiles, generateCode, resizeImages)
                  );

module.exports = {
  buildFiles,
  copyStaticFiles
}
