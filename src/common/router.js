export default [
  {
    title: '微官网', // 页面标题&一级nav标题
    icon: 'icon-home',
    path: '/front/approval/undo', // 路由url
    component: 'minweb'  // 路由组件
  },
  {
    title: '会员', // 页面标题&一级nav标题
    icon: 'icon-home',
    path: 'index/user',
    children: [{
      title: '会员列表',  // 次级nav标题
      path: '/index/user/index', // 路由url
      component: 'vipList'  // 路由组件
    },
    {
      title: '会员卡列表',  // 次级nav标题
      path: '/vip/cardList', // 路由url
      component: 'vipCardList'  // 路由组件
    }]
  },
  // ...
]