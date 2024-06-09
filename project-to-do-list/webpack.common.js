const path = require("path"); // import path library
const HtmlWebpackPlugin = require("html-webpack-plugin"); // import the plugin

module.exports = {
  entry: {
    app: "./src/index.js", // where to entry and make the dependency resolution
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/index.html",
    }), // plugins we will use
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }, // this is to tell webpack how to handle css imports
  output: {
    filename: "[name].bundle.js", // this has [name] for split entries (multiple bundle.js)
    path: path.resolve(__dirname, "dist"),
    clean: true, // clean up output to remove unused files
  }, // where to output
};
