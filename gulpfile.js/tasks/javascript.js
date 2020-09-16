const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const typescript = require("gulp-typescript");

const { rollup } = require("rollup");

function compile() {

  const project = typescript.createProject("tsconfig.json");

  const compiled = src("./src/ts/**/*.ts")
                    .pipe(sourcemaps.init())
                    .pipe(project())
                    .pipe(sourcemaps.write("./"));

  return compiled.pipe(dest("./src/js/"));
}

async function bundle() {

  const build = await rollup({ input: "./src/js/main.js" });

  return build.write({
          file: "./build/js/all.js",
          format: "umd",
          name: "all",
          sourcemap: true
        });
}

module.exports = {
  compile,
  bundle
};
