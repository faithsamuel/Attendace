import { dummyRequest } from "@/helpers";

export default {
  namespaced: true,
  state: {
    profile: {},
    token: localStorage.getItem("token")
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
    SET_TOKEN(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    }
  },
  getters: {
    profile(state) {
      return state.profile;
    },
    loggedIn(state) {
      // return !!state.token;
      // return Boolean(state.token);
      return state.token != null;
    },
    token(state) {
      return state.token;
    }
  },
  actions: {
    login({ dispatch, commit }, { email, password }) {
      // return dummyRequest("Invalid email or password", 1000, true)
      return dummyRequest({ token: "sdfsdfgweg999" }, 1000)
        .then(res => {
          commit("SET_TOKEN", res.token);
          return dispatch("fetchProfile");
        })
        .catch(e => {
          throw e;
        });
    },
    fetchProfile({ commit, getters }, token) {
      return dummyRequest({
        name: "Abolarin Olanrewaju",
        email: "lanre@omniswift.com",
        token: getters.token
      }).then(profile => {
        commit("SET_PROFILE", profile);
        return profile;
      });
    }
  }
};
