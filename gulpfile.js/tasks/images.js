const { src, dest } = require("gulp");

const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const responsive = require("gulp-responsive");
const pngquant = require("imagemin-pngquant");

const configs = require("../utilities/options");
const paths = require("../utilities/paths");

/**
 * Resizes project images, using gulp-responsive.
 * @returns NodeJS.ReadWriteStream
 */
function resize() {

  const glob = "src/assets/img/**/*.{png,jpg}";
  
  return src(glob)
          .pipe(responsive())
          .pipe( dest(`${paths.env.dev}/assets/img`) );
}

/**
 * Minify project images, using imagemin.
 * @returns NodeJS.ReadWriteStream
 */
function optimize() {
  
  const glob = `${paths.env.dev}/**/*.{jpg,png,gif}`;

  const plugins = [
    imagemin.gifsicle(configs.imagemin.plugins.gifsicle),
    imagemin.jpegtran(configs.imagemin.plugins.jpegtran),
    imagemin.optipng(configs.imagemin.plugins.optipng),
    imagemin.svgo(configs.imagemin.plugins.svgo),
    pngquant()
  ]

  return src(glob)
          .pipe(cache(imagemin(plugins, configs.imagemin.options)))
          .pipe(dest(`${paths.env.prod}`));
}

resize.displayName = "resize:images";
optimize.displayName = "optimize:images";

module.exports = {
  resize,
  optimize
}
