import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Cookie from './Cookie.js'


Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.Cookie = Cookie



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
