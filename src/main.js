// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)
// Vue.use($)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
