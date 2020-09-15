// Modules
const { rollup } = require('../modules/modules.manifest');

// Main task
function bundleJS() {
  return rollup.rollup({
                  input: './src/js/main.js',
                })
                .then(bundle => {
                  return bundle.write({
                    file: './build/js/all.js',
                    format: 'umd',
                    name: 'all',
                    sourcemap: true
                  });
                });
}

module.exports = {
  bundleJS
};