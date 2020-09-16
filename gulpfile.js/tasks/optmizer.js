const { parallel } = require("gulp");

const { optimizeCode } = require("./codeOptimizer");
const images = require("./images");

const runOptmizer = parallel(images.optimize, optimizeCode);

module.exports = {
  runOptmizer
}
