const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();
const paths = require("./paths");

module.exports = () => {
  return src(`${paths.srcDir}sass/*.scss`)
    .pipe(plugins.sass().on("error", plugins.sass.logError))
    .pipe(plugins.autoprefixer()) // Prefix css with older browser support
    .pipe(plugins.cleanCss({ level: 2 })) // Minify css
    .pipe(dest(paths.outputDir));
};
