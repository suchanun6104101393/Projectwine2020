export const state = () => ({
  login: true,
  user: null,
  data: [],
  headers: [
    {
      text: 'WINE',
      align: 'start',
      sortable: false,
      value: 'Wine',
    },
    { text: 'Price', value: 'size' },
  ],
})
export const mutations = {
  input(state, { Wine, size }) {
    state.data.push({ Wine, size })
  },
  login(state, val) {
    state.login = val
  },
  user(state, val) {
    state.user = val
  },
  update(state, val) {
    state.user[0].favorite = val
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
