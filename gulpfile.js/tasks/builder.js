// Utilities
const { src, dest, series, parallel } = require('../utilities/api');
const { path } = require('../utilities/paths');

// Dependency tasks
const { cleanBuild } = require('./folderCleaner');
const { generateCode } = require('./codeGenerator');
const { resizeImages } = require('./imageResizer');

// Tasks
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
