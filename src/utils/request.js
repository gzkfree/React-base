import axios from "axios";
// import router from "../router/index";
import store from "../store/index";
import { Authorization_update } from "../store/action/user";
const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  headers: { "content-type": "application/json;charset=utf-8" },
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 10000,
});
// let baseUrlArr = [];
// if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "production") {
//   baseUrlArr = [
//     `${process.env.VUE_APP_BASEURL}/api/admin`, //用于请求用户业务
//     `${process.env.VUE_APP_BASEURL}/api/insurance/`, //用于请求保险业务
//     `${process.env.VUE_APP_BASEURL}/auth/oauth/token`, //请求toekn
//   ];
// } else {
//   baseUrlArr = [
//     `path/api/admin`, //用于请求用户业务
//     `path/api/insurance/`, //用于请求保险业务
//     `path/auth/oauth/token`, //请求toekn
//   ];
// }

let getTicket = function () {
  service.defaults.baseURL = "";
  let param = new URLSearchParams();
  param.append("username", "bigfamousdoctor");
  param.append("password", "vdaifu123456");
  param.append("grant_type", "password");
  param.append("client_id", "client-app");
  param.append("client_secret", "123456");
  return service({
    method: "post",
    url: baseUrlArr[2],
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: param,
  });
};
service.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = "Bearer " + store.getters.getAuthorization;
    return config;
  },
  (error) => {
    return Promise.reject();
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      if (response.data.code === 1) {
        return Promise.resolve(response.data);
      } else {
        // Message.error(response.data.message)
        if (response.data.code === 401) {
          // getTicket().then((res) => {
          //   store.dispatch(Authorization_update(res.data.token));
          //   console.log(store.getState("Authorization"));
          // });
        }
        return Promise.reject(response.data);
      }
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const http = function (methods, url, oData, urlType, config) {
  console.log(methods, url, oData);
  //   let Authorization = store.getters.getAuthorization;
  // let Authorization = "";
  // service.defaults.baseURL = baseUrlArr[urlType];
  // if (Authorization) {
  switch (methods.toLowerCase()) {
    case "get":
      return config
        ? service.get(url, { params: oData, ...config })
        : service.get(url, { params: oData });
    case "post":
      console.log(oData);
      if (oData.params) {
        return service.post(url, null, oData, config);
      } else {
        return service.post(url, oData, config);
      }

    case "put":
      return service.put(url, oData, config);
    case "delete":
      return config
        ? service.delete(url, { params: oData, ...config })
        : service.delete(url, { params: oData });
  }
  // }
  // else {
  //   return getTicket().then((res) => {
  //     service.defaults.baseURL = baseUrlArr[urlType];
  //     store.dispatch(Authorization_update(res.data.token));
  //     console.log(store.getState().user.Authorization);
  //     switch (methods.toLowerCase()) {
  //       case "get":
  //         return config
  //           ? service.get(url, { params: oData, ...config })
  //           : service.get(url, { params: oData });
  //       case "post":
  //         return service.post(url, oData, config);
  //       case "put":
  //         return service.put(url, oData, config);
  //       case "delete":
  //         return config
  //           ? service.delete(url, { params: oData, ...config })
  //           : service.delete(url, { params: oData });
  //     }
  //   });
  // }
};

export default http;
