import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/lib/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums: []
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums
    }
  },
  actions: {
    async search({ commit }, username) {
      try {
        const albums = await get({ url: `/${username}/albums` })
        if (albums.data.data.length > 0) {
          commit('setAlbums', albums.data.data)
          return Promise.resolve()
        } else {
          return Promise.reject(null)
        }
      } catch (error) {
        return Promise.reject(error.response)
      }
    }
  }
})
