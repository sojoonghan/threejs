const path = require('path');
const { merge } = require('webpack-merge');
const common = require('../webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: { directory: path.resolve(__dirname, '../build') },
    port: 1004,
    compress: true,
    hot: true,
    open: true,
    liveReload: false,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      AnalyzerMode: 'server',
      openAnalyzer: false,
    }),
  ],
});
