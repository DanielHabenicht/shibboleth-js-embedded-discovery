const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/javascript/idpselect.js',
  output: {
    filename: 'idpselect.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: __dirname,
    // },
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
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/resources/idpselect.css', to: 'dist/idpselect.css' }],
    }),
  ],
};
