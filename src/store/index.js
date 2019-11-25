import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import logs from "./modules/logs";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    logs
  }
});
