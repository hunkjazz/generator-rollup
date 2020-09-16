const { src } = require("gulp");

const ghPages = require("gulp-gh-pages");

function deploy() {

  const glob = `${paths.env.prod}/**/*`;
  
  return src(glob).pipe( ghPages() );
}

module.exports = {
  deploy
};
