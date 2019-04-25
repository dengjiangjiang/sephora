import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/homepage'
import register from '@/page/register'
import login from '@/page/login'
import particulars from '@/page/particulars'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    {
      path:'/particulars',
      name:'particulars',
      component: particulars
    }
    

    
  ]
})
