// Utilities
const { src, dest } = require('../utilities/api');

// Plugins
const { responsive } = require('../plugins/plugins.manifest');

function resizeImages() {
  return src('src/assets/img/**/*.{png,jpg}')
          .pipe(responsive({
            // 'file-infix-*.*': [
            //   {
            //     width: 123,
            //     rename: { suffix: '-123w' }
            //   }
            // ]
          }))
          .pipe(dest('./build/assets/img'));
}

module.exports = {
  resizeImages
}