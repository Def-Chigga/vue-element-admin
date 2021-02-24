import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  /* 路由懒加载 */
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main'),
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login')
  }
];

const router = new VueRouter({
  routes
});

// 导航守卫
router.beforeEach((to, from, next) => {
// to 将要访问的路径
// from 代表从哪个路径跳转而来
// next 是一个函数 表示放行
// next() 放行   next('/login')  强制跳转
//   console.log(to);
//   console.log(from);
//   console.log(next);
  /*  if (to.path !== '/login') {
      const tokenStr = window.sessionStorage.getItem('token');
      if (!tokenStr) {
        next('/login');
      }
    } else {
      next();
    } */
  if (to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login');
  next();
});

export default router;
