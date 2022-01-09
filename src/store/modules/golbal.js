//数据状态
const state = {
  loading: false

}

//类似于 computed 属性
// get 获取状态
const getters = {
  // renderCollects (state) {
  //   return state.collects
  // }

}
//同步更新 状态
const mutations = {
  setLoading (state, status) {
    console.log(status)
    state.loading = status
  },
}

//异步更新 状态

const actions = {
  // invokePushItems ({commit}, item) {
  //   commit('pushCollect', item)
  // }
}

export default {
  state,
  getters,
  mutations,
  actions,
}



























