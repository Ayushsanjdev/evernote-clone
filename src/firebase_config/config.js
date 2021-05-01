import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Sm_r4C7pCikKM0zsET-0OPXJCI8QW2U",
  authDomain: "evermemo-ddcb2.firebaseapp.com",
  projectId: "evermemo-ddcb2",
  storageBucket: "evermemo-ddcb2.appspot.com",
  messagingSenderId: "935371223048",
  appId: "1:935371223048:web:fb13600a5a4ed96585a1bd"
};

firebase.initializeApp(firebaseConfig);
// const database = firebase.firestore();

export default firebaseConfig;
