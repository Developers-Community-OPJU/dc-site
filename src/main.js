import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
require("./common/toast");
import Editor from 'vue-editor-js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(Vuelidate)

// CONFIGURING AXIOS
// URL OF SERVER API ON HEROKU / MONGODB ATLAS
//  axios.defaults.baseURL = "https://dco-server-api.herokuapp.com/";  // Remote server
axios.defaults.baseURL = "http://localhost:3000";  // localhost

Vue.use(Editor)
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
