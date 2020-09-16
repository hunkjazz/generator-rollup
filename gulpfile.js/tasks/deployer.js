const { src } = require('gulp');

const { ghPages } = require('../plugins/plugins.manifest');

function deployFiles() {

  const glob = './dist/**/*';
  
  return src(glob).pipe( ghPages() );
}

module.exports = {
  deployFiles
};
