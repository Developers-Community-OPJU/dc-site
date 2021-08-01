import Vue from 'vue'
import Vuex from 'vuex'
// importing modules
import auth from './modules/auth'
import blog from './modules/blog'
import issues from './modules/issues'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    blog,
    issues
  }
})
