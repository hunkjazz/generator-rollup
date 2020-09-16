const {
  series,
  parallel
} = require("gulp");

const sass = require("./sass");
const javascript = require("./javascript");

const generateCode = parallel(
                      sass.compile, 
                      series(javascript.compile, javascript.bundle)
                    );

module.exports = {
  generateCode
}
