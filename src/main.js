import Vue from 'vue';
import animatedScroll from '@/scrollAnimation';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Meta from 'vue-meta';
import Carousel3d from 'vue-carousel-3d';

Vue.directive('animatedScroll', animatedScroll);

Vue.config.productionTip = false;
Vue.use(Meta);
Vue.use(Carousel3d);

new Vue({
  metaInfo: {
    title: 'Artolo.pl',
    titleTemplate: 'Artolo.pl',
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
