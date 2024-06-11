// webpack.dev.js
const { merge } = require("webpack-merge"); // this is the library that merges this with the common config
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // development mode has more tools
  devtool: "inline-source-map", // allows to see error from specific js files, not just the bundled js
  devServer: {
    watchFiles: ["src/*"], // when file changes, reload the web server; NOTE: src/**/* means watch all files and subdir recursively
    static: "./dist", //
  }, // this is the basic server to allow for auto reload on code change
  optimization: {
    runtimeChunk: "single", // this is for when we have split entries
  },
});
