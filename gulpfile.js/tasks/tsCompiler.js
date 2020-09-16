const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

function compileTS() {
  const tsResult = src("./src/ts/**/*.ts")
                    .pipe(sourcemaps.init())
                    .pipe(tsProject())
                    .pipe(sourcemaps.write("./"));

  return tsResult
          .pipe(dest("./src/js/"));
}

module.exports = {
  compileTS
};
