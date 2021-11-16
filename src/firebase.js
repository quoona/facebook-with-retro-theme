import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXLYJ1QZWEMLKSdnscq6_ArbNd4iT1q7w",
  authDomain: "facebook-retro.firebaseapp.com",
  projectId: "facebook-retro",
  storageBucket: "facebook-retro.appspot.com",
  messagingSenderId: "175666885800",
  appId: "1:175666885800:web:cd3890e4d8993e0f4bbe9d",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
