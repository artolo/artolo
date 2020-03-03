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
    component: () => import('../views/ViewAbout.vue'),
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/ViewPortfolio.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
