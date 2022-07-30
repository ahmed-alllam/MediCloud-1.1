import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    isLoggedIn: false,
  },
  mutations: {
    loggedIn(state, response) {
      state.token = response
      state.isLoggedIn = true;
      localStorage.setItem('accessToken', response);
    },
    loggedOut(state) {
      state.token = "";
      state.isLoggedIn = false;
      localStorage.setItem('accessToken', "");
    }
  },
  actions: {
    fetchAccessToken({ commit }) {
      const token = localStorage.getItem('accessToken');
      console.log("token +" + token)
      if(token)
        commit('loggedIn', token);
      else
        commit('loggedOut');
    }
  },
})
