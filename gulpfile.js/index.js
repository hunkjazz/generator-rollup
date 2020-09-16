const { series } = require("gulp");

const watch = require("./tasks/watcher");
const css = require("./tasks/css");
const { deploy } = require("./tasks/deployer");
const { build, release } = require("./tasks/builder");

exports.build = build();
exports.release = release();
exports.serve = series(build(), watch.all);
exports.deploy = series(release(), deploy);
exports.sassdoc = series(css.sassdocs);
