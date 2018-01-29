import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
/* Layout */
import Layout from 'views/LayOut/index'

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      component: Layout,
      name: 'index',
      redirect: 'tablelineecharts/index',
      children: [
        {path: 'index', component: _import('TableLineEcharts/index')}
      ]
    },

    {
      path: '/tablelineecharts',
      component: Layout,
      name: 'tablelineecharts/index',
      redirect: 'tablelineecharts/index',
      children: [
        {path: 'index', component: _import('TableLineEcharts/index')}
      ]
    },
  ]
})
