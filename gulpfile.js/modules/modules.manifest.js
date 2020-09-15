const del = require('del');
const rollup = require('rollup');
const sassdoc = require('sassdoc');

// Modules that require minimal configurations
const { browserSync } = require('./browserSync');

module.exports = {
  browserSync,
  del,
  rollup,
  sassdoc
}
