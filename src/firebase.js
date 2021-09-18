import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDdpNt-Pgq1A-WdunU6IBrHv-pOdSP2Yo4",
    authDomain: "beam-7ac4a.firebaseapp.com",
    projectId: "beam-7ac4a",
    storageBucket: "beam-7ac4a.appspot.com",
    messagingSenderId: "886766576341",
    appId: "1:886766576341:web:0bd558feda95c0efe3f85c",
  })
  .auth();
