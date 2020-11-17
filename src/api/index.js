import request from "../utils/request";

export function login(data) {
  return request({
    methods: "post",
    url: "/base/app_login/f/admin_login",
    data,
    type: 0,
  });
}
// // 渠道列表
// getChannelList(oData){
//     return request('post', '/distributors/page', oData, 1)
// },
// // 查询省
// getProvince(oData){
//     return request('get','/arearegion/province/list', oData,1)
// },
// getCity(oData){
//     return request('get','/arearegion/city/list', oData,1)
// },
// getArea(oData){
//     return request('get','/arearegion/area/list', oData,1)
// },
// addChannel(oData){
//     return request('post','/distributors', oData,1)
// }
