import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import stu from '@/views/Student'
import soc from '@/views/Social'
import soci from '@/views/soc-inf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/stu',
      name: 'stu',
      component: stu
    },{
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/soc',
      name: 'soc',
      component: soc
    },{
      path: '/soci',
      name: 'soci',
      component: soci
    }
  ]
})
