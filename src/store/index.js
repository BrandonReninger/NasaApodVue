import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let _epicApi = axios.create({
  baseURL: 'https://api.nasa.gov/EPIC/api/natural/images?api_key=WIhFUnIw1nx9GDAy7ucQEZ4MRb9nfGYjGIGvPczh',
  timeout: 10000
})

let _api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=C59OroTVdv2B7wJWzvYbPZeISZYz6SmgDMATc3JR',
  timeout: 10000
})

export default new Vuex.Store({
  state: {
    apods: [],
    photos: []
  },
  mutations: {
    setApods(state, apods) {
      state.apods = apods
    },
    setPhotos(state, photos) {
      state.photos = photos
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
    },
    async getPhotos({
      commit,
      dispatch
    }) {
      try {
        let res = await _epicApi.get('')
        console.log(res.data)
        commit('setPhotos', res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})