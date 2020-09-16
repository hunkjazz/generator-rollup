const { src } = require("gulp");

const ghPages = require("gulp-gh-pages");

/**
 * Push app to remote gh-pages branch.
 *
 * @returns ReadWriteStream
 */
function deploy() {

  const glob = `${paths.env.prod}/**/*`;
  
  return src(glob).pipe( ghPages() );
}

module.exports = {
  deploy
};
