// Modules
const { del } = require('../modules/modules.manifest');

// Main tasks
function cleanBuild() {
  return del(['./build'])
}

function cleanDist() {
  return del(['./dist'])
}

module.exports = {
  cleanBuild,
  cleanDist
}