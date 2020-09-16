const { src, dest } = require("gulp");

const responsive = require("gulp-responsive");

function resizeImages() {

  const glob = "src/assets/img/**/*.{png,jpg}";
  
  return src(glob)
          .pipe(responsive({
            // "file-infix-*.*": [
            //   {
            //     width: 123,
            //     rename: { suffix: "-123w" }
            //   }
            // ]
          }))
          .pipe( dest("./build/assets/img") );
}

module.exports = {
  resizeImages
}
