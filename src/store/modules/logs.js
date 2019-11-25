import db from "@/lib/db";
export default {
  namespaced: true,
  state: {
    all: [],
    userLogs: []
  },
  mutations: {
    SET_USER_LOGS(state, data) {
      this.state.userLogs = data;
    }
  },
  getters: {
    todaysLogs(state) {
      return state.userLogs;
    }
  },
  actions: {
    signIn({ commit, getters, rootGetters }) {
      db.collection("logs")
        .where("email", "==", rootGetters["auth/profile"].email)
        .get()
        .then(snapshot => {
          console.dir(snapshot);
          // find todays own
          // if none for today
          // set a new
        });
    }
  }
};
