import Vue from 'vue'
import VueRouter from 'vue-router'
import MyList from '../views/MyList.vue'
import Sort from '../views/Sort.vue'
import ParentView from '../views/ParentView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyList',
    component: MyList
  },
  {
    path: '/sort',
    name: 'Sort',
    component: Sort
  },
  {
    path: '/parent-view',
    name: 'ParentView',
    component: ParentView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
