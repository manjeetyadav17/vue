import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/Settings.vue'),
    },
    {
      path: '/editor/:slug?',
      name: 'editor',
      component: () => import('@/views/Editor.vue'),
    },
    {
      path: '/@:username',
      name: 'profile',
      component: ()=> import('@/views/Profile.vue'),
    },
    {
      path: '/article/:slug',
      name: 'article',
      component: ()=> import('@/views/Article.vue'),
    },
  ],
});
