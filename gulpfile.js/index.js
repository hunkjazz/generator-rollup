const { series } = require("gulp");

const { watchTasks } = require("./tasks/watcher");
const { deploy } = require("./tasks/deployer");
const { build, release } = require("./tasks/builder");
const sass = require("./tasks/sass");

exports.build = build();
exports.release = release();
exports.serve = series(build(), watchTasks);
exports.deploy = series(release, deploy);
exports.sassdoc = series(sass.docs);
