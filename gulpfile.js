// Gulp stuuf
const { src, dest, series, parallel, watch } = require("gulp");
const plugins = require("gulp-load-plugins")();
// Browser sync
const browserSync = require("browser-sync").create();

// Vars
const paths = {
  srcDir: "./src/",
  outputDir: "./build",
};

//
// Gulp tasks
//
const buildStyles = () => {
  return src(`${paths.srcDir}sass/*.scss`)
    .pipe(plugins.sass().on("error", plugins.sass.logError))
    .pipe(plugins.autoprefixer()) // Prefix css with older browser support
    .pipe(plugins.cleanCss({ level: 2 })) // Minify css
    .pipe(dest(paths.outputDir));
};

const copyHtml = () => {
  return src(`${paths.srcDir}html/*.html`)
    .pipe(plugins.htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.outputDir));
};

//
// Browser sync and watching
//
const syncBrowser = () => {
  return browserSync.init({
    server: {
      baseDir: paths.outputDir,
    },
    port: 8888,
  });
};

const reloadBrowser = (done) => {
  browserSync.reload();
  done();
};

const watchFiles = () => {
  // Watch sass files
  watch(`${paths.srcDir}sass/*.scss`, series(buildStyles, reloadBrowser));
  // Watch html
  watch(`${paths.srcDir}html/*.html`, series(copyHtml, reloadBrowser));
};

const serve = series(buildStyles, copyHtml, parallel(watchFiles, syncBrowser));
const build = series(buildStyles, copyHtml);

exports.default = serve;
exports.build = build