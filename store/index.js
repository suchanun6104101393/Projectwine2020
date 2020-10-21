export const state = () => ({
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
}
export const getters = {
  data(state) {
    return state.data
  },
}
