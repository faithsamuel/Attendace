import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import SignIn from '../components/SignIn.vue'
import StaffTodo from '../components/StaffTodo.vue'
import StaffLog from '../components/StaffLog.vue'
import Admin from '../components/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: SignIn
  },
  {
    path: '/staffTodo',
    component: StaffTodo
  },
  {
    path: '/staffLog',
    component: StaffLog
  },
  {
    path: '/admin',
    component: Admin
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
