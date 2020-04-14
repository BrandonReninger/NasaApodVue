import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
    apod: {}
  },
  mutations: {
    setApod(state, apod) {
      state.apod
    }
  },
  actions: {
    async getApod({
      commit,
      dispatch
    }) {
      try {
        let res = await _api.get('api_key=C59OroTVdv2B7wJWzvYbPZeISZYz6SmgDMATc3JR')
        console.log(res.data)
        commit('setApod', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})