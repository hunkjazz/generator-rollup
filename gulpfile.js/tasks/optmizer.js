const { parallel } = require('../utilities/api');

const { optimizeCode } = require('./codeOptimizer');
const { optimizeImg } = require('./imgOptmizer');

const runOptmizer = parallel(optimizeImg, optimizeCode);

module.exports = {
  runOptmizer
}
