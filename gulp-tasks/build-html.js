const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();
// Local
const paths = require("./paths");
const fs = require("fs");

// Get data
const version =
  process.env.VERSION_NUMBER ||
  JSON.parse(fs.readFileSync("./package.json")).version;

module.exports = () => {
  return src(paths.njk.src)
    .pipe(
      plugins.nunjucksRender({
        path: "src/",
        watch: true,
      })
    )
    .pipe(plugins.replace("$*version", version))
    .pipe(plugins.formatHtml())
    .pipe(plugins.htmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(dest(paths.outputDir));
};
