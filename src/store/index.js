import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=C59OroTVdv2B7wJWzvYbPZeISZYz6SmgDMATc3JR',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
    apods: []
  },
  mutations: {
    setApods(state, apods) {
      state.apods = apods
    }
  },
  actions: {
    async getApods({
      commit,
      dispatch
    }) {
      try {
        let res = await _api.get('')
        console.log(res.data)
        commit('setApods', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})