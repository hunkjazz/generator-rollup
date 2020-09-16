const { src } = require("gulp");

const ghPages = require("gulp-gh-pages");

function deployFiles() {

  const glob = "./dist/**/*";
  
  return src(glob).pipe( ghPages() );
}

module.exports = {
  deployFiles
};
