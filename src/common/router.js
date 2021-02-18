export default [
  {
    title: "控制台", // 页面标题&一级nav标题
    icon: "icon-home",
    path: "/index", // 路由url
  },
  {
    title: "电影管理", // 页面标题&一级nav标题
    icon: "icon-home",
    path: "/index/movie",
    children: [
      {
        title: "电影列表", // 次级nav标题
        path: "/index/movie/list", // 路由url
      },
      {
        title: "电影添加", // 次级nav标题
        path: "/index/movie/add", // 路由url
      },
    ],
  },
  // ...
];
