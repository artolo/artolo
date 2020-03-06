import Vue from 'vue';
import animatedScroll from '@/scrollAnimation';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import Meta from 'vue-meta';

Vue.directive('animatedScroll', animatedScroll);

Vue.config.productionTip = false;
Vue.use(Meta);

new Vue({
  metaInfo: {
    title: 'Artolo.pl',
    titleTemplate: 'Artolo.pl',
  },
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
