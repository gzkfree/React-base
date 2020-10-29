const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//生成前需要清理之前项目生成的文件，因为由于文件名的改变如果不删除会一直增加
//新写法{ CleanWebpackPlugin } new CleanWebpackPlugin()
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(baseWebpackConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      //生成的文件名添加Hash值，目的是解决缓存问题
      output: {
        filename: "js/[name].[chunkhash:16].js",
      },
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ],
  //目的是分离框架代码和业务代码,抽出框架代码生成两个文件，但是app.js还是包含框架代码
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 1,
      minSize: 0,
      //cacheGroups对象，定义了需要被抽离的模块
      cacheGroups: {
        framework: {
          test: "framework",
          name: "framework",
          enforce: true
        }
      }
    }
  }
});