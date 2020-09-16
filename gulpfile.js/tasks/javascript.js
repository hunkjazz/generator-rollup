const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const typescript = require("gulp-typescript");

const { rollup } = require("rollup");

const paths = require("../utilities/paths");

function compile() {

  compile.displayName = "compile:javascript"

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
          file: `${paths.env.dev}/js/all.js`,
          format: "umd",
          name: "all",
          sourcemap: true
        });
}

compile.displayName = "compile:javascript";
bundle.displayName = "bundle:javascript";

module.exports = {
  compile,
  bundle
};
