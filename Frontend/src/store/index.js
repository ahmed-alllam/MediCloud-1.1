import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: true,
    authToken: ""
  },
  mutations: {
    loggedIn(state, response) {
      state.token = response.token
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.token = "";
      state.isLoggedIn = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
