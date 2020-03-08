import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import swalPlugin from './plugins/VueSweetalert2';

window.Vue = require('vue');
Vue.use(swalPlugin);

const swalPlugin = {};

swalPlugin.install = function (Vue) {
  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$swal = swal;
};

export default swalPlugin;
