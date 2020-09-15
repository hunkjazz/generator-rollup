// Utilities
const { src } = require('../utilities/api');
const { options } = require('../utilities/options');

// Plugins
const { sassDoc } = require('../modules/modules.manifest');

function buildSassDoc() {

  return  src('./src/scss/**/*.scss')
            .pipe(sassDoc(options.sassDoc));
}

module.exports = {
  buildSassDoc
}