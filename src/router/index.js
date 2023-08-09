import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import Store from '@/store'
// import Cookies from 'js-cookie'
// import Store from '@/store';

//路由数组的类型 RouteRecordRaw
const routes = [
  {
    path: "/",
    name: 'Home',
    meta: { isCommonLayout: true },
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/register",
    name: 'Sign up',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Register.vue"),
  },
  {
    path: "/login",
    name: 'Sign in',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Login.vue"),
  },
  {
    path: "/forgot",
    name: 'Forgot Password',
    meta: { isCommonLayout: false },
    component: () => import("@/views/base/Forgot.vue"),
  },
  {
    path: "/talk",
    name: 'Talk',
    meta: { isCommonLayout: true },
    component: () => import("@/views/talk/Index.vue"),
  },
  {
    path: "/article",
    name: 'Article',
    meta: { isCommonLayout: true },
    component: () => import("@/views/article/Index.vue"),
  },
  {
    path: "/photo-album",
    name: 'PhotoAlbum',
    meta: { isCommonLayout: true },
    component: () => import("@/views/photoAlbum/Index.vue"),
  },
  {
    path: "/project",
    name: 'Project',
    meta: { isCommonLayout: true },
    component: () => import("@/views/project/Index.vue"),
  },
  {
    path: "/message-board",
    name: 'MessageBoard',
    meta: { isCommonLayout: true },
    component: () => import("@/views/messageBoard/Index.vue"),
  }
];
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});


// router.beforeEach((to,from,next)=>{
//   let token = Store().useUserStore.token
//   if(to.meta.requiresAuth){
//       if(token){
//           next()
//       }else{
//           next({
//               path:'/login',
//               query:{
//                   redirect:to.fullPath
//               }
//           })
//       }
//   }else{
//       next()
//   }
// })

export default router;

