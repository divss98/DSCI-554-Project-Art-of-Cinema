import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MapBox from '../views/MapBox.vue'
import IntBar from '../views/IntBar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MapBox',
    name: 'Map Box',
    component: MapBox
  },
  {
    path: '/IntBar',
    name: 'Int Bar',
    component: IntBar
  },
  
  {
    path: '/d3chart',
    name: 'D3Chart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/D3Chart.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
