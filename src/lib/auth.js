import * as Msal from "msal";
const msalConfig = {
  auth: {
    clientId: "276aeab6-8d6d-4207-8336-0c885b9251d3",
    redirectUri: "http://localhost:8080/auth"
  },

  cache: {
    cachelocation: "sessionStorage",
    storeAuthStateInCookie: true
  }
};

const msalInstance = new Msal.UserAgentApplication(msalConfig);
export default msalInstance;
