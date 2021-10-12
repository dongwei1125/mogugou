export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
    },
    component: () => import('views/home'),
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      title: '分类',
    },
    component: () => import('views/category'),
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车',
    },
    component: () => import('views/cart'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '我的',
    },
    component: () => import('views/profile'),
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      title: '详情',
    },
    component: () => import('views/detail'),
  },
]
