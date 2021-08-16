import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Bk from '../views/bk.vue'
import Me from '../views/Me.vue'
import Ktv from '../views/Ktv.vue'
import Medetails from '../views/Medetails.vue'
import Mrtj from '../views/Index/Mrtj.vue'
import Phb from '../views/Index/Phb.vue'
import Wdxx from '../views/Me/Wdxx.vue'
import Fsqk from '../views/Me/Wdxx/Fs.vue'
import Pl from '../views/Me/Wdxx/Pl.vue'
import At from '../views/Me/Wdxx/At.vue'
import Tz from '../views/Me/Wdxx/Tz.vue'
import Login from '../views/login/Login.vue'
import Sjhmdl from '../views/login/Sjhmdl.vue'
import Gddetails from '../views/GD/Gddetails.vue'
import Gdpinglun from '../views/GD/gdpinglun.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      showTab:true
    }
  },
  {
    path:'/gddetails',
    name:'Gddetails',
    component:Gddetails  
  },
  {
    path:'/gdpinglun',
    name:'gdpinglun',
    component:Gdpinglun
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/sjhmdl',
    name:'Sjhmdl',
    component:Sjhmdl,
  },
  {
    path:'/mrtj',
    name:'mrtj',
    component:Mrtj
  },
  {
    path:'/phb',
    name:'phb',
    component:Phb
  },
  {
    path:'/bk',
    name:'Bk',
    component:Bk,
    meta:{
      showTab:true
    }  
  },
  {
    path:'/me',
    name:'Me',
    component:Me,
    meta:{
      showTab:true
    }
  },
  {
    path:'/wdxx',
    name:'Wdxx',
    component:Wdxx
  },
  {
    path:'/fsqk',
    name:'Fsqk',
    component:Fsqk
  },
  {
    path:'/pl',
    name:'Pl',
    component:Pl
  },
  {
    path:'/at',
    name:'At',
    component:At
  },
  {
    path:'/tz',
    name:'Tz',
    component:Tz
  },
  {
    path:'/ktv',
    name:'Ktv',
    component:Ktv,
    meta:{
      showTab:true
    }
  },
  {
    path:'/medetails',
    name:'Medetails',
    component:Medetails,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
