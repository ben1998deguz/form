import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: {
      target: '',
      project: '',
      bank: null,
      amount: '',
      interest: '',
      duration: '',
      dob: '',
      postalcode: '',
      profession: null,
      smoker: null
    },
    isActive1: true,
    isActive2: false,
    isActive3: false
  },
  mutations: {
    setButton1(state, payload) {
      state.data.target = payload;
    },
    setButton4(state, payload) {
      state.data.project = payload;
    },
    setButton6(state, payload) {
      state.data.bank = payload;
    },
    setButton7(state, payload) {
      state.data.amount = payload;
    },
    setButton8(state, payload) {
      state.data.duration = payload;
    },
    setButton9(state, payload) {
      state.data.interest = payload;
    },
    setButton10(state, payload) {
      state.data.dob = payload;
    },
    setButton11(state, payload) {
      state.data.postalcode = payload;
    },
    setButton12(state, payload) {
      state.data.profession = payload;
    },
    setButton13(state, payload) {
      state.data.smoker = payload;
    },
    setButton14(state, payload) {
      state.isActive1 = payload;
    },
    setButton15(state, payload) {
      state.isActive2 = payload;
    },
    setButton16(state, payload) {
      state.isActive3 = payload;
    }
    /* setBankes(state, payload) {
      state.bankes = payload;
    } */
  },
  actions: {
    handlers1(context, data) {
      context.commit('setButton1', data)
    },
    handlers2(context, data) {
      context.commit('setButton1', data)
    },
    handlers3(context, data) {
      context.commit('setButton1', data)
    },
    handlers4(context, data) {
      context.commit('setButton4', data)
    },
    handlers5(context, data) {
      context.commit('setButton4', data)
    },
    handlers6(context, data) {
      context.commit('setButton6', data)
    },
    handlers7(context, data) {
      context.commit('setButton7', data)
    },
    handlers8(context, data) {
      context.commit('setButton8', data)
    },
    handlers9(context, data) {
      context.commit('setButton9', data)
    },
    handlers10(context, data) {
      context.commit('setButton10', data)
    },
    handlers11(context, data) {
      context.commit('setButton11', data)
    },
    handlers12(context, data) {
      context.commit('setButton12', data)
    },
    handlers13(context, data) {
      context.commit('setButton13', data)
    },
    handlers14(context, data) {
      context.commit('setButton14', data)
    },
    handlers15(context, data) {
      context.commit('setButton15', data)
    },
    handlers16(context, data) {
      context.commit('setButton16', data)
    },
    async bankesRequest() {
      try {
        const result = await axios.post('https://tapmont.com/wp-json/restapi/v1/product-recommendations',
        this.state.data,
          {
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
          } 
        )
        // context.commit('setBankes', result.data)
        console.log(result.data)
      } catch(error) {
        console.log(error)
      }
    }
  },
};
