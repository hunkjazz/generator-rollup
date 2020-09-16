const { src } = require('gulp');
const options = require('../utilities/options');

const sassdoc = require('sassdoc');

function buildSassDoc() {

  const glob = './src/scss/**/*.scss';

  return  src(glob)
            .pipe(sassdoc(options.sassdoc));
}

module.exports = {
  buildSassDoc
}
