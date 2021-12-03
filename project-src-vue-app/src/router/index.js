import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MapBox from '../views/MapBox.vue'
import IntBarAction from '../views/IntBarAction.vue'
import IntBarAdventure from '../views/IntBarAdventure.vue'
import IntBarComedy from '../views/IntBarComedy.vue'
import CertificatePie from '../views/CertificatePie.vue'
import TimeLine from '../views/TimeLine.vue'
import Tree from '../views/Tree.vue'
import Prop_Symbol_Map from '../views/Prop_Symbol_Map.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TimeLine',
    name: 'TimeLine',
    component: TimeLine
  },
  {
    path: '/Tree',
    name: 'Tree',
    component: Tree
  },
  {
    path: '/MapBox',
    name: 'Map Box',
    component: MapBox
  },
  {
    path: '/IntBarAction',
    name: 'Int Bar Action',
    component: IntBarAction
  },
  {
    path: '/IntBarAdventure',
    name: 'Int Bar Adventure',
    component: IntBarAdventure
  },
  {
    path: '/IntBarComedy',
    name: 'Int Bar Comedy',
    component: IntBarComedy
  },
  {
    path: '/CertificatePie',
    name: 'Certificate Pie',
    component: CertificatePie
  },
  {
    path: '/Prop_Symbol_Map',
    name: 'Prop Sybmol Map',
    component: Prop_Symbol_Map
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
