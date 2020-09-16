const del = require("del");

function cleanBuild() {

  return del(["./build"])
}

function cleanDist() {
  
  return del(["./dist"])
}

module.exports = {
  cleanBuild,
  cleanDist
}
