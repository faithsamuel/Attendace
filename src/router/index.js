import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'
import SignIn from "../views/SignIn.vue";
import Home from "../components/Home.vue";
import StaffLog from "../components/StaffLog.vue";
import Admin from "../components/Admin.vue";
import Timer from "../components/Timer.vue";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    name: "signin",
    path: "/",
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/loggedIn"]) {
        return next({ name: "home" });
      }
      next();
    }
  },
  {
    name: "home",
    path: "/staffLog",
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    name: "stafflog",
    path: "/stafflog",
    component: StaffLog,
    meta: { requiresAuth: true }
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
    meta: { requiresAuth: true }
  },
  {
    name: "timer",
    path: "/timer",
    component: Timer,
    meta: { requiresAuth: true }
  }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let loggedIn = store.getters["auth/loggedIn"];
    if (!loggedIn) {
      next({ name: "signin" });
      return;
    }
  }
  next();
});
export default router;
