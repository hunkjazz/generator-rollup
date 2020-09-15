const { src } = require('../utilities/api');
const { options } = require('../utilities/options');

const { sassdoc } = require('../modules/modules.manifest');

function buildSassDoc() {

  return  src('./src/scss/**/*.scss')
            .pipe(sassdoc(options.sassdoc));
}

module.exports = {
  buildSassDoc
}
