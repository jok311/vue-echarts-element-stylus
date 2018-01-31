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
      redirect: 'goodlist/index',
      children: [
        {path: 'index', component: _import('GoodList/index')}
      ]
    },

    {
      path: '/goodlist',
      component: Layout,
      name: 'goodlist/index',
      redirect: 'goodlist/index',
      children: [
        {path: 'index', component: _import('GoodList/index')}
      ]
    },
  ]
})
