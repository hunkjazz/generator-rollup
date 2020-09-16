const pngquant = require("imagemin-pngquant");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const paths = require("./paths");

let htmlmin,
    purgecss,
    imagemin,
    imageminPlugins,
    postcssPlugins,
    browsersync,
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
    `${paths.env.dev}/**/*.html`,
    `${paths.env.dev}/js/**/*.js`
  ],
  css: [`${paths.env.dev}/css/main.css`]
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

browsersync = {
  init: {
    server: {
      baseDir: `${paths.env.dev}`,
      index: "index.html",
      routes: {
          "/node_modules": "node_modules"
      }
    }
  }
};

sassdoc = {
  dest: "docs/sassdoc"
}

module.exports = {
  htmlmin,
  purgecss,
  imagemin,
  imageminPlugins,
  postcssPlugins,
  browsersync,
  sassdoc
}
