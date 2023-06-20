const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/javascript/idpselect.js",
  output: {
    filename: "idpselect.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    library: "ShibbolethEmbeddedDiscoverService",
    globalObject: "this",
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dev"),
    },
    client: {
      overlay: true,
      reconnect: true,
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/resources/idpselect.css", to: "idpselect.css" },
        // { from: 'src/javascript/idpselect_config.js', to: 'idpselect_config.js' }
      ],
    }),
  ],
};
