export default {
  namespaced: true,
  state: {
    step1: {
      one: '',
      two: '',
      three: ''
    }
  },
  mutations: {
    setTarget(state, payload) {
      state.step1.one = payload;
      state.step1.two = payload;
      state.step1.three = payload;
    },
  },
  actions: {
  },
};
