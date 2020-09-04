import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import store from './store';
import router from './router';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
