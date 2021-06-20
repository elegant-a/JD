import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Login.vue'


const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile_123" */ '../views/profile/Profile.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home_123" */ '../views/home/Home.vue')
  },
  {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList_123" */ '../views/orderList/OrderList.vue')
  },
  {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation_123" */ '../views/orderConfirmation/OrderConfirmation.vue')
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList_123" */ '../views/cartList/CartList.vue')
  },
  {
   path:'/shop/:id',
   name:'Shop',
   component: () => import(/* webpackChunkName: "Shop_123" */ '../views/shop/Shop.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register_123" */ '../views/register/Register.vue'),
    beforeEnter(to,form,next){
      const {isLogin} = localStorage;
      isLogin ? next({name:'Home'}) :  next();
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to,form,next){
      const {isLogin} = localStorage;
      isLogin ? next({name:'Home'}) :  next();
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 设置路由守卫
router.beforeEach((to,from,next)=>{
  //从localStorage里面取isLogin这个属性
  const { isLogin } = localStorage;
  // to对象下面的属性,Login
  // to.name
  const { name } = to;
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next ({name:'Login'})
   
})

export default router
