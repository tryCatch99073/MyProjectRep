import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Society from './views/Society'
import Stroke from './views/Stroke'
import Job from './views/Job'
import User from './views/User'
import Society_ADD from './views/Society_ADD'
import Stroke_ADD from './views/Stroke_ADD'
import Job_ADD from './views/Job_ADD'
import noticy from './views/noticy'
import Noticy_ADD from './views/Noticy_ADD'
import Resume_Template from './views/Resume_Template'
import Apply from './views/Apply'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/society',
      name: 'society',
      component: Society
    },{
      path: '/stroke',
      name: 'stroke',
      component: Stroke
    }, {
      path: '/job',
      name: 'job',
      component: Job
    }, {
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/society/add',
      name: 'society_add',
      component: Society_ADD
    },{
      path: '/stroke/add',
      name: 'stroke_add',
      component: Stroke_ADD
    },{
      path: '/job/add',
      name: 'job_add',
      component: Job_ADD
    },{
      path: '/noticy',
      name: 'noticy',
      component: noticy
    },{
      path: '/noticy/add',
      name: 'noticy_add',
      component: Noticy_ADD
    },{
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    ,{
      path: '/rt',
      name: 'rt',
      component: Resume_Template
    }
  ]
})
