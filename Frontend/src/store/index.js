import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios'

export default new Vuex.Store({
  state: {
    token: "",
    isLoggedIn: false,
    user_id: "",
    user_name: "",
    user_email: "",
  },
  mutations: {
    loggedIn(state, token) {
      state.token = token
      state.isLoggedIn = true;

      localStorage.setItem('accessToken', token);

      try {
        const decoded = VueJwtDecode.decode(token)
        state.user_id = decoded._id
        state.user_name = decoded.fullName
        state.user_email = decoded.email
      } catch (error) {
        console.log(error)
      }

      axios.defaults.headers.common['Authorization'] = `JWT ${token}` 
    },
    loggedOut(state) {
      state.token = "";
      state.isLoggedIn = false;
      state.user_id = "";
      state.user_name = "";
      state.user_email = "";

      localStorage.setItem('accessToken', "");

      axios.defaults.headers.common['Authorization'] = '' 
    }
  },
  actions: {
    fetchAccessToken({ commit }) {
      const token = localStorage.getItem('accessToken');
      console.log("token +" + token)
      if (token) {
        commit('loggedIn', token);
      } else {
        commit('loggedOut');
      }
    }
  },
})
