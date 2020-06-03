import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建vuex实例
const store = new Vuex.Store({
  state: {
    userId: '',
    gotoPath: '',
    source: '',
    userInfo: {}
  },
  mutations: {
    setUser (data, msg) {
      data.userId = msg
    },
    setGotoPath (data, msg) {
      data.gotoPath = msg
    },
    setSource (data, msg) {
      data.source = msg
    },
    setUserInfo (data, msg) {
      data.userInfo = msg
    }
  }
})

export default store
