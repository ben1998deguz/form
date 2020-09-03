export default {
  namespaced: true,
  state: {
    step1: {
      one: '',
      two: '',
      three: '',
      isActive: false
    },
    // bankes: null
  },
  mutations: {
    setButton1(state, payload) {
      state.step1.one = payload;
      state.step1.isActive = payload;
    },
    setButton2(state, payload) {
      state.step1.two = payload;
    },
    setButton3(state, payload) {
      state.step1.two = payload;
    },
    /* setBankes(state, payload) {
      state.bankes = payload;
    } */
  },
  actions: {
    handlers1(context, data) {
      context.commit('setButton1', data)
    },
    handlers2(context, data) {
      context.commit('setButton2', data)
    },
    handlers3(context, data) {
      context.commit('setButton3', data)
    },
   /*  async bankesRequest(context) {
      try {
        const result = await axios.get('https://tapmont.com/wp-json/restapi/v1/banks', {headers: {"x-dsi-restful":1}})
        context.commit('setBankes', result.data)
        console.log(result.data)
      } catch(error) {
        console.log(error)
      }
    } */
  },
};
