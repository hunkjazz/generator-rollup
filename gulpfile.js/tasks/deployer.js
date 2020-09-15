const { src } = require('../utilities/api');

const { ghPages } = require('../plugins/plugins.manifest');

function deployFiles() {
  return src('./dist/**/*')
          .pipe(ghPages());
}

module.exports = {
  deployFiles
};