import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

import FormModule from './modules/FormModule';

Vue.use(Vuex);

const persistence = new VuexPersistence({
  storage: window.localStorage,
  modules: ['form'],
});

export default new Vuex.Store({
  modules: {
    form: FormModule,
  },
  plugins: [
    persistence.plugin,
  ],
});
