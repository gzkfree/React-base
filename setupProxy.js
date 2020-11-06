const proxy = require("http-proxy-middleware");
module.exports = {
  baseUrl: "./",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/path": {
        target: "https://famousdoctor.dev.vdaifu.com",
        changeOrigin: true,
        pathRewrite: {
          "^/path": "/",
        },
      },
    },
  },
};
