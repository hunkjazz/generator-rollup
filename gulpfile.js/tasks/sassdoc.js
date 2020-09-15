const { src } = require('../utilities/api');
const { options } = require('../utilities/options');

const { sassdoc } = require('../modules/modules.manifest');

function buildSassDoc() {

  const glob = './src/scss/**/*.scss';

  return  src(glob)
            .pipe(sassdoc(options.sassdoc));
}

module.exports = {
  buildSassDoc
}
