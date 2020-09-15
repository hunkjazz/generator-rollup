const del = require('del');
const rollup = require('rollup');
const sassdoc = require('sassdoc');

const { browserSync } = require('./browserSync');

module.exports = {
  browserSync,
  del,
  rollup,
  sassdoc
}
