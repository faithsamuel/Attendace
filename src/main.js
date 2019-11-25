import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import Buefy from "buefy";

Vue.use(Buefy, {
  defaultIconPack: "mdi"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    if (this.$store.getters["auth/loggedIn"]) {
      this.$store.dispatch("auth/fetchProfile");
    }
  }
}).$mount("#app");
