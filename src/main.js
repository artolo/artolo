import Vue from 'vue';
import animatedScroll from '@/scrollAnimation';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.directive('animatedScroll', animatedScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
