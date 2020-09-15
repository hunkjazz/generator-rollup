const { 
  src,
  dest,
  series,
  parallel
} = require('../utilities/api');

const { path } = require('../utilities/paths');

const { generateCode } = require('./codeGenerator');
const { cleanBuild } = require('./folderCleaner');
const { resizeImages } = require('./imageResizer');

function copyStaticFiles() {

  return src(path.staticFiles)
          .pipe(dest('build/'));
}

const buildFiles = series(
                    cleanBuild, 
                    parallel(copyStaticFiles, generateCode, resizeImages)
                  );

module.exports = {
  buildFiles,
  copyStaticFiles
}
