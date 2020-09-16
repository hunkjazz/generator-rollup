const {
  series,
  parallel
} = require("gulp");

const { bundleJS } = require("./jsBundler");
const { compileSass } = require("./sassCompiler");
const { compileTS } = require("./tsCompiler");

const generateCode = parallel(compileSass, series(compileTS, bundleJS));

module.exports = {
  generateCode
}
