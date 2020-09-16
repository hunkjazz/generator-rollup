const { src, dest } = require("gulp");

const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const responsive = require("gulp-responsive");
const pngquant = require("imagemin-pngquant");

const options = require("../utilities/options");

function resize() {

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

function optimize() {
  
  const glob = "build/**/*.{jpg,png,gif}";

  const imageminPlugins = [
    imagemin.gifsicle(options.imageminPlugins.gifsicle),
    imagemin.jpegtran(options.imageminPlugins.jpegtran),
    imagemin.optipng(options.imageminPlugins.optipng),
    imagemin.svgo(options.imageminPlugins.svgo),
    pngquant()
  ]

  return src(glob)
          .pipe(cache(imagemin(imageminPlugins, options.imagemin)))
          .pipe(dest("dist/"));
}

resize.displayName = "resize:images";
optimize.displayName = "optimize:images";

module.exports = {
  resize,
  optimize
}
