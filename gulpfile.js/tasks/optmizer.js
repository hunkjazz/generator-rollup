// Utilities
const { parallel } = require('../utilities/api');

// Dependency tasks
const { optimizeCode } = require('./codeOptimizer');
const { optimizeImg } = require('./imgOptmizer');

// Alias
const runOptmizer = parallel(optimizeImg, optimizeCode);

module.exports = {
  runOptmizer
}