import Vuex from './vuex'

export default new Vuex.Store({
  state: {
    goods: [],
  },
  mutations: {
    ADD_GOODS(state, arg) {
      const el = state.goods.find(el => el.id === arg.id)

      el
        ? el.count++
        : state.goods.push({
            ...arg,
            checked: false,
            count: 1,
          })
    },

    ALL_CHECKED(state, val) {
      state.goods.forEach(el => (el.checked = val))
    },
  },
})
