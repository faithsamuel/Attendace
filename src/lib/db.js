import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyANip5wGI9nyowgi8kh9UTRawQJhKNBwt0",
  authDomain: "os-att.firebaseapp.com",
  databaseURL: "https://os-att.firebaseio.com",
  projectId: "os-att",
  storageBucket: "os-att.appspot.com",
  messagingSenderId: "312266893532",
  appId: "1:312266893532:web:338d012776295a6766ac19",
  measurementId: "G-B8RY2X929E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export default db;
