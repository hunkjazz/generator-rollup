const { src, dest } = require('gulp');

const {
  ts,
  sourcemaps
} = require('../plugins/plugins.manifest');

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
