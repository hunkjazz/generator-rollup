const { src, dest } = require('gulp');
const options = require('../utilities/options');

const { cache } = require('../plugins/plugins.manifest');
const { imagemin, pngquant } = require('../plugins/imagemin');

function optimizeImg() {
  
  const glob = 'build/**/*.{jpg,png,gif}';

  const imageminPlugins = [
    imagemin.gifsicle(options.imageminPlugins.gifsicle),
    imagemin.jpegtran(options.imageminPlugins.jpegtran),
    imagemin.optipng(options.imageminPlugins.optipng),
    imagemin.svgo(options.imageminPlugins.svgo),
    pngquant()
  ]

  return src(glob)
          .pipe(cache(imagemin(imageminPlugins, options.imagemin)))
          .pipe(dest('dist/'));
}

module.exports = {
  optimizeImg
};
