const path = require("path");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");
const portfinder = require("portfinder");
var FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
// 读取环境配置
const readEnv = require("./readEnv");
const env = readEnv("../.env.dev");
const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    filename: "js/[name].[hash:16].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      minify: {
        html5: true,
      },
      hash: false,
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      // 定义环境和变量
      "process.env": {
        ...env,
      },
    }),
    // webpack热启动报错 Maximum call stack size exceeded，报错原因是因为
    // package.json中 的 "start": "webpack-dev-server --hot" 中的--hot和webpack.config.js中
    //new webpack.HotModuleReplacementPlugin(）两者冲突导致的
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: "8080",
    host: "127.0.0.1",
    contentBase: path.join(__dirname, "../public"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    https: false,
    noInfo: true,
    open: true,
    quiet: false,
    // proxy: {
    //   "/path": {
    //     target: "https://famousdoctor.dev.vdaifu.com",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/path": "/",
    //     },
    //   },
    // },
  },
});
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || devWebpackConfig.devServer.port;
  //查找端口号
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      //端口被占用时就重新设置evn和devServer的端口
      process.env.PORT = port;
      devWebpackConfig.devServer.port = port;
      //友好地输出信息
      devWebpackConfig.plugins.push(
        new FriendlyErrorsWebpackPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`,
            ],
          },
          onErrors: function (severity, errors) {
            //您可以收听插件转换和优先级的错误
            //严重性可以是'错误'或'警告'
            console.log(errors);
          },
          // onErrors: config.dev.notifyOnErrors
          // ? utils.createNotifierCallback()
          // : undefined
        })
      );
      resolve(devWebpackConfig);
    }
  });
});
