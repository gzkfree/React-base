export default [
  {
    title: '微官网', // 页面标题&一级nav标题
    icon: 'icon-home',
    name: '页面设计',  // 次级nav标题
    meta: {
      title: '页面设计'
    },
    path: '/front/approval/undo', // 路由url
    component: 'minweb'  // 路由组件
  },
  {
    title: '会员', // 页面标题&一级nav标题
    icon: 'icon-home',
    subMenu: 'vip',
    children: [{
      navItem: true,
      name: '会员列表',  // 次级nav标题
      path: '/front/approval/undo', // 路由url
      component: 'vipList'  // 路由组件
    },
    {
      name: '会员卡列表',  // 次级nav标题
      path: '/front/approval/undo', // 路由url
      component: 'vipCardList'  // 路由组件
    }]
  },
  // ...
]