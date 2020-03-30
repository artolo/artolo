import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/ViewHomepage.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/ViewAboutUs.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/ViewPortfolio.vue'),
  },
  // other
  {
    path: '*',
    name: '404',
    component: () => import('../views/default/errors/ViewError404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
