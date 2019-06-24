import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Default from "./layouts/Default"
import Other from "./layouts/Other"

Vue.component('default-layout', Default)
Vue.component('other-layout', Other)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
