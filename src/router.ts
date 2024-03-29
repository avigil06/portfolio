import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "forms" */ './views/Forms.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blog-article',
      component: () => import(/* webpackChunkName: "blog" */ './views/Article.vue'),
    },
  ],
});
