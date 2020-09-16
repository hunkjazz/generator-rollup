const pngquant = require('imagemin-pngquant');

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

let htmlmin,
    purgecss,
    imagemin,
    imageminPlugins,
    postcssPlugins,
    browserSync,
    sassdoc;

htmlmin = {
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true
};

purgecss = {
  content: [
    './build/**/*.html', 
    './build/js/**/*.js'
  ],
  css: ['build/css/main.css']
};

imagemin = {
  verbose: true,
  use: [pngquant()]
};

imageminPlugins = {
  gifsicle: {
    interlaced: true
  },
  jpegtran: {
    progressive: true
  },
  optipng: {
    optimizationLevel: 5
  },
  svgo: {
    plugins: [
      {removeViewBox: true},
      {cleanupIDs: false}
    ]
  },
};

postcssPlugins = [
  cssnano(),
  autoprefixer()
],

browserSync = {
  init: {
    server: {
      baseDir: "./build",
      index: "index.html",
      routes: {
          "/node_modules": "node_modules"
      }
    }
  }
};

sassdoc = {
  dest: 'docs/sassdoc'
}

module.exports = {
  htmlmin,
  purgecss,
  imagemin,
  imageminPlugins,
  postcssPlugins,
  browserSync,
  sassdoc
}
