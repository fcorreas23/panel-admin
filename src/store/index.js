import Vue from 'vue'
import Vuex from 'vuex'
import decode from 'jwt-decode'
import route from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  
  mutations: {
    setToken(state, token){
      state.token = token
    },

    setUser(state, user){
      state.user, user
    }
  },
  
  actions: {
    saveToken({commit}, token){
      commit("setToken", token)
      commit("setUser", decode(token))
      window.localStorage.setItem("useredgenomica", token)
      return decode(token)
    },

    autologin({commit}){
      let token = window.localStorage.getItem("useredgenomica")
      if(token) {
        commit("setToken", token)
        commit("setUsuario", decode(token))
        route.push({name: 'Home'})
      }
    },

    logout({commit}){
      commit("setToken" , null)
      commit("setUser", null)
      window.localStorage.removeItem("useredgenomica")
      route.push({name: 'Login'})
    }
  },
  modules: {
  }
})
