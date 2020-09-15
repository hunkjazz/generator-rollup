// Utilities
const { parallel, series } = require('../utilities/api');

// Dependency tasks
const { bundleJS } = require('./jsBundler');
const { compileSass } = require('./sassCompiler');
const { compileTS } = require('./tsCompiler');

// Alias
const generateCode = parallel(compileSass, series(compileTS, bundleJS));

module.exports = {
  generateCode
}