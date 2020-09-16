const { series } = require("gulp");

const { watchTasks } = require("./tasks/watcher");
const { deploy } = require("./tasks/deployer");
const { build, release } = require("./tasks/builder");
const { buildSassDoc } = require("./tasks/sassdoc");

exports.build = build();
exports.release = release();
exports.serve = series(build(), watchTasks);
exports.deploy = series(release, deploy);
exports.sassdoc = series(buildSassDoc);
