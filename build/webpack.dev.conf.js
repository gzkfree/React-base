const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: "js/[name].[hash:16].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        html5: true
      },
      hash: false
    }),
    // webpack热启动报错 Maximum call stack size exceeded，报错原因是因为 
    // package.json中 的 "start": "webpack-dev-server --hot" 中的--hot和webpack.config.js中
    //new webpack.HotModuleReplacementPlugin(）两者冲突导致的
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: '8080',
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    https: false,
    noInfo: true,
    open: true,
    proxy: {}
  }
});