
const { rollup } = require("rollup");

function bundleJS() {
  return rollup({
                  input: "./src/js/main.js",
                })
                .then(bundle => {
                  return bundle.write({
                    file: "./build/js/all.js",
                    format: "umd",
                    name: "all",
                    sourcemap: true
                  });
                });
}

module.exports = {
  bundleJS
};
