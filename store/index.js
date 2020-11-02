export const state = () => ({
  login: true,
  user: null,
})
export const mutations = {
  login(state, val) {
    state.login = val
  },
  user(state, val) {
    state.user = val
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
