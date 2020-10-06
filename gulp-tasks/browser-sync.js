const browserSync = require("browser-sync").create();
const paths = require("./paths.js");

const sync = () => {
  return browserSync.init({
    server: {
      baseDir: paths.outputDir,
    },
    port: 8888,
  });
};

const reload = (done) => {
  browserSync.reload();
  done();
};

exports.reload = reload;
exports.sync = sync;
