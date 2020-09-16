const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");

const browserSync = require("browser-sync").create();
const nodesass = require("node-sass");
const sassdoc = require("sassdoc");

const options = require("../utilities/options");

function compile() {
  
  sass.compiler = nodesass;

  const glob = "./src/scss/**/*.scss";
  
  const compiled = src(glob)
                    .pipe(sourcemaps.init())
                    .pipe(sass().on("error", sass.logError))
                    .pipe(sourcemaps.write("./"));

  return compiled
          .pipe(dest("./build/css"))
          .pipe(browserSync.stream());
}

function sassdocs() {

  const glob = "./src/scss/**/*.scss";

  return  src(glob).pipe(sassdoc(options.sassdoc));
}

compile.displayName = "compile:css";
sassdocs.displayName = "docs:sass";

module.exports = {
  compile,
  sassdocs
};
