import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.prototype.ip = "127.0.0.1" ;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
