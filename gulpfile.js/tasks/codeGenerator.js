const {
  series,
  parallel
} = require("gulp");

const { bundleJS } = require("./jsBundler");
const sass = require("./sass");
const { compileTS } = require("./tsCompiler");

const generateCode = parallel(sass.compile, series(compileTS, bundleJS));

module.exports = {
  generateCode
}
