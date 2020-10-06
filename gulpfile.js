// Modules
const { series, parallel, watch } = require("gulp");
// Tasks
const { reload, sync } = require("./gulp-tasks/browser-sync");
const paths = require("./gulp-tasks/paths");
const buildStyles = require("./gulp-tasks/build-styles");
const buildHtml = require("./gulp-tasks/build-html");

// Watchers
const watchFiles = () => {
  watch(paths.sass.src, series(buildStyles, reload));
  watch(paths.njk.src, series(buildHtml, reload));
};

// Gulp tasks
const serve = series(buildStyles, buildHtml, parallel(watchFiles, sync));
const build = series(buildStyles, buildHtml);

// Exports
exports.default = serve;
exports.build = build;
