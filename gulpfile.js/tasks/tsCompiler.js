// Utilities
const { src, dest } = require('../utilities/api');

// Plugins
const { ts, sourcemaps } = require('../plugins/plugins.manifest');

// Main task
// Typescript project configuration file
const tsProject = ts.createProject('tsconfig.json');

function compileTS() {
  const tsResult = src("./src/ts/**/*.ts")
                    .pipe(sourcemaps.init())
                    .pipe(tsProject())
                    .pipe(sourcemaps.write('./'));

  return tsResult
          .pipe(dest('./src/js/'));
}

module.exports = {
  compileTS
};