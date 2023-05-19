import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/router'
import VueResouce from 'vue-resource'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResouce)

Vue.config.productionTip = false

new Vue({
  router, // 注入根实例
  render: h => h(App),
}).$mount('#app')
