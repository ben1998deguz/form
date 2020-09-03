import Vue from 'vue';
import Vuex from 'vuex';

import FormModule from './modules/FormModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    form: FormModule,
  }
});
