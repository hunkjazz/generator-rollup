const { src, dest } = require('gulp');

const { responsive } = require('../plugins/plugins.manifest');

function resizeImages() {

  const glob = 'src/assets/img/**/*.{png,jpg}';
  
  return src(glob)
          .pipe(responsive({
            // 'file-infix-*.*': [
            //   {
            //     width: 123,
            //     rename: { suffix: '-123w' }
            //   }
            // ]
          }))
          .pipe( dest('./build/assets/img') );
}

module.exports = {
  resizeImages
}
