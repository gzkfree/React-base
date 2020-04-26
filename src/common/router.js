export default [
  {
    title: '微官网', // 页面标题&一级nav标题
    icon: 'icon-home',
    routes: [{
      name: '页面设计',  // 次级nav标题
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo'  // 路由组件
    }]
  },
  {
    title: '会员', // 页面标题&一级nav标题
    icon: 'icon-home',
    routes: [{
      name: '会员列表',  // 次级nav标题
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo'  // 路由组件
    },
    {
      name: '会员卡列表',  // 次级nav标题
      path: '/front/approval/undo', // 路由url
      component: 'ApprovalUndo'  // 路由组件
    }]
  },
  // ...
]