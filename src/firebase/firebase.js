import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAe9vZz86tcUurpU43N-00OaTn3huXDnzE",
    authDomain: "fir-login-livia.firebaseapp.com",
    projectId: "fir-login-livia",
    storageBucket: "fir-login-livia.appspot.com",
    messagingSenderId: "247378590867",
    appId: "1:247378590867:web:20f3a53a19cee1d0a22166",
    measurementId: "G-XEGLWQH3CW"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);