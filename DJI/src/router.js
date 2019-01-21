import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Society from './views/Society.vue'
import School from './views/School.vue'
import Lgn from './views/Lgn.vue'
import Recruitment from './views/Recruitment.vue'
import User from './views/User.vue'
import Index from './views/Index.vue'
import Info from './views/Info.vue'
import Resume from './views/Resume.vue'
import Resume_Template from './views/Resume_Template.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/society',
      name: 'society',
      component: Society
    },
    {
      path: '/school',
      name: 'school',
      component: School
    },
    {
      path: '/lgn',
      name: 'lgn',
      component: Lgn
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: Recruitment
    }
    ,
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/inf',
      name: 'info',
      component: Info
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/resume_template',
      name: 'resume_template',
      component: Resume_Template
    }
  ]
})
