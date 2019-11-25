import { dummyRequest } from "@/helpers";
import MS from "@/lib/auth";
import { dispatch } from "../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/pairs";
let defaultReqs = { scopes: ["user.read", "mail.send"] };

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
      state.token = token;
    },
    LOGOUT(state) {
      state.token = null;
    }
  },
  getters: {
    profile(state) {
      return state.profile;
    },
    loggedIn(state) {
      return state.token != null;
    },
    token(state) {
      return state.token;
    }
  },
  actions: {
    login({ dispatch, commit }) {
      function handleTokenResponse(res) {
        commit("SET_TOKEN", res.accessToken);
        return dispatch("fetchProfile");
      }

      return MS.loginPopup(defaultReqs)
        .then(response => {
          return MS.acquireTokenSilent(defaultReqs).then(handleTokenResponse);
        })
        .catch(err => {
          console.log(err);
        });
    },
    fetchProfile({ commit, dispatch, getters }, token) {
      let profile = MS.getAccount();
      commit("SET_PROFILE", { name: profile.name, email: profile.userName });
      dispatch("logs/signIn", null, { root: true });
      return Promise.resolve(profile);
    },
    logout({ commit }) {
      MS.logout();
      commit("LOGOUT");
    },
    init({ commit, dispatch }) {
      let profile;
      if ((profile = MS.getAccount())) {
        commit("SET_PROFILE", { email: profile.userName, name: profile.name });
        dispatch("logs/signIn", null, { root: true });

        MS.acquireTokenSilent(defaultReqs).then(res => {
          commit("SET_TOKEN", res.accessToken);
        });
      }
    }
  }
};
