// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as filters from '@/filters'//过滤器
import * as globalfunctions from 'globalFunctions'

import 'url-search-params-polyfill'  // ajax 控件兼容插件

Vue.config.productionTip = false


Vue.use(ElementUI)

Vue.prototype.$http = axios //this.axios全局使用


// // register global utility filters.注册全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
});

// // register global prototype.注册全局必用的APP函数
Object.keys(globalfunctions).forEach(key => {
	Vue.prototype[key] = globalfunctions[key]
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
