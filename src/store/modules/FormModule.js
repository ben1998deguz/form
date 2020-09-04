export default {
  namespaced: true,
  state: {
    data: {
      step1: {
        target1: '',
        target2: '',
        target3: '',
        nature1: '',
        nature2: '',
        selectedBank: null,
        euro: '',
        percent: '',
        selectedTime: '',
      },
      step2: {
        celander: '',
        referenceNumber: '',
        selectedProfessional: null,
        selectedCheck: null
      }
    },
    isActive1: true,
    isActive2: false,
    isActive3: false
  },
  mutations: {
    setButton1(state, payload) {
      state.data.step1.target1 = payload;
    },
    setButton2(state, payload) {
      state.data.step1.target2 = payload;
    },
    setButton3(state, payload) {
      state.data.step1.target3 = payload;
    },
    setButton4(state, payload) {
      state.data.step1.nature1 = payload;
    },
    setButton5(state, payload) {
      state.data.step1.nature2 = payload;
    },
    setButton6(state, payload) {
      state.data.step1.selectedBank = payload;
    },
    setButton7(state, payload) {
      state.data.step1.euro = payload;
    },
    setButton8(state, payload) {
      state.data.step1.selectedTime = payload;
    },
    setButton9(state, payload) {
      state.data.step1.percent = payload;
    },
    setButton10(state, payload) {
      state.data.step2.celander = payload;
    },
    setButton11(state, payload) {
      state.data.step2.referenceNumber = payload;
    },
    setButton12(state, payload) {
      state.data.step2.selectedProfessional = payload;
    },
    setButton13(state, payload) {
      state.data.step2.selectedCheck = payload;
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
      context.commit('setButton2', data)
      console.log(data)
    },
    handlers3(context, data) {
      context.commit('setButton3', data)
      console.log(data)
    },
    handlers4(context, data) {
      context.commit('setButton4', data)
      console.log(data)
    },
    handlers5(context, data) {
      context.commit('setButton5', data)
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
    }
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
