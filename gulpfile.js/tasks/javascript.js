const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const typescript = require("gulp-typescript");

const { rollup } = require("rollup");

const paths = require("../utilities/paths");

/**
 * Compiles JS without Bundling.
 * @returns NodeJS.ReadWriteStream
 */
function compile() {

  compile.displayName = "compile:javascript"

  const project = typescript.createProject("tsconfig.json");

  const compiled = src("./src/ts/**/*.ts")
                    .pipe(sourcemaps.init())
                    .pipe(project())
                    .pipe(sourcemaps.write("./"));

  return compiled.pipe(dest(`${paths.env.dev}/js/`));
}

/**
 * Compile and bundle JS, using rollup.
 * @returns Promise<RollupOutput>
 */
async function bundle() {

  const typescript = require("@rollup/plugin-typescript");

  const options = {
    input: {
      input: `src/ts/main.ts`,
      plugins: [typescript()],
    },
    output: {
      format: "cjs",
      sourcemap: true,
      file: `${paths.env.dev}/js/bundle.js`
    }
  };

  const bundle = await rollup(options.input);

  return await bundle.write(options.output);
}

compile.displayName = "compile:javascript";
bundle.displayName = "bundle:javascript";

module.exports = {
  compile,
  bundle
};
