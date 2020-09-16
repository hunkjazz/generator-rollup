const { src } = require("gulp");

const ghPages = require("gulp-gh-pages");

function deploy() {

  const glob = "./dist/**/*";
  
  return src(glob).pipe( ghPages() );
}

module.exports = {
  deploy
};
