const { parallel, series } = require('../utilities/api');

const { bundleJS } = require('./jsBundler');
const { compileSass } = require('./sassCompiler');
const { compileTS } = require('./tsCompiler');

const generateCode = parallel(compileSass, series(compileTS, bundleJS));

module.exports = {
  generateCode
}
