// Plugins
const { pngquant } = require('../plugins/imagemin');
const { autoprefixer, cssnano } = require('../plugins/postcss');

const options = {
  htmlmin: {
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
  },
  purgecss: {
    content: [
      './build/**/*.html', 
      './build/js/**/*.js'
    ],
    css: ['build/css/main.css']
  },
  imagemin: {
    verbose: true,
    use: [pngquant()]
  },
  imageminPlugins: {
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
  },
  postcssPlugins: [
    cssnano(),
    autoprefixer()
  ],
  browserSync: {
    init: {
      server: {
        baseDir: "./build",
        index: "index.html",
        routes: {
            "/node_modules": "node_modules"
        }
      }
    }
  },
  sassdoc: {
    dest: 'docs/sassdoc'
  }
}

module.exports = {
  options
}
