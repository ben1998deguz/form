import axios from 'axios'

export default {
  namespaced: true,
  state: {
    data: {
      step1: {
        target: '',
        project: '',
        bank: null,
        amount: '',
        interest: '',
        duration: '',
      },
      step2: {
        dob: '',
        postalcode: '',
        profession: null,
        smoker: null
      }
    },
    isActive1: true,
    isActive2: false,
    isActive3: false
  },
  mutations: {
    setButton1(state, payload) {
      state.data.step1.target = payload;
    },
    setButton4(state, payload) {
      state.data.step1.project = payload;
    },
    setButton6(state, payload) {
      state.data.step1.bank = payload;
    },
    setButton7(state, payload) {
      state.data.step1.amount = payload;
    },
    setButton8(state, payload) {
      state.data.step1.duration = payload;
    },
    setButton9(state, payload) {
      state.data.step1.interest = payload;
    },
    setButton10(state, payload) {
      state.data.step2.dob = payload;
    },
    setButton11(state, payload) {
      state.data.step2.postalcode = payload;
    },
    setButton12(state, payload) {
      state.data.step2.profession = payload;
    },
    setButton13(state, payload) {
      state.data.step2.smoker = payload;
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
      console.log(data)
    },
    handlers2(context, data) {
      context.commit('setButton1', data)
      console.log(data)
    },
    handlers3(context, data) {
      context.commit('setButton1', data)
      console.log(data)
    },
    handlers4(context, data) {
      context.commit('setButton4', data)
      console.log(data)
    },
    handlers5(context, data) {
      context.commit('setButton4', data)
      console.log(data)
    },
    handlers6(context, data) {
      context.commit('setButton6', data)
      console.log(data)
    },
    handlers7(context, data) {
      context.commit('setButton7', data)
      console.log(data)
    },
    handlers8(context, data) {
      context.commit('setButton8', data)
      console.log(data)
    },
    handlers9(context, data) {
      context.commit('setButton9', data)
      console.log(data)
    },
    handlers10(context, data) {
      context.commit('setButton10', data)
      console.log(data)
    },
    handlers11(context, data) {
      context.commit('setButton11', data)
      console.log(data)
    },
    handlers12(context, data) {
      context.commit('setButton12', data)
      console.log(data)
    },
    handlers13(context, data) {
      context.commit('setButton13', data)
      console.log(data)
    },
    handlers14(context, data) {
      context.commit('setButton14', data)
      console.log(data)
    },
    handlers15(context, data) {
      context.commit('setButton15', data)
      console.log(data)
    },
    handlers16(context, data) {
      context.commit('setButton16', data)
      console.log(data)
    },
    async bankesRequest() {
      try {
        const result = await axios.post('https://tapmont.com/wp-json/restapi/v1/product-recommendations', this.state.data )
        // context.commit('setBankes', result.data)
        console.log(result.data)
      } catch(error) {
        console.log(error)
      }
    }
  },
};
