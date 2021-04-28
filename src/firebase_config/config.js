import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA0Sm_r4C7pCikKM0zsET-0OPXJCI8QW2U",
    authDomain: "evermemo-ddcb2.firebaseapp.com",
    projectId: "evermemo-ddcb2",
    storageBucket: "evermemo-ddcb2.appspot.com",
    messagingSenderId: "935371223048",
    appId: "1:935371223048:web:fb13600a5a4ed96585a1bd"
};

const firestore = firebase.firestore();
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
  