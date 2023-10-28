import { createStore } from 'vuex'
import { signInAndGetUser, signOut } from './lib/microsoftGraph.js'

export default createStore({
  state: {
    user: null,
    userName: null,
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    async signIn({ commit }) {
      const user = await signInAndGetUser()
      commit('setUser', user)
    },
    async signOut({ commit }) {
      await signOut()
      commit('setUser', null)
    },
  },
})