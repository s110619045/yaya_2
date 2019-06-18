import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjANiB4PqZHZjx2e5bFOhYcw61dEIbOfU",
    authDomain: "dollwardrobe-33cd9.firebaseapp.com",
    databaseURL: "https://dollwardrobe-33cd9.firebaseio.com",
    projectId: "dollwardrobe-33cd9",
    storageBucket: "dollwardrobe-33cd9.appspot.com",
    messagingSenderId: "186297303388",
    appId: "1:186297303388:web:137a40e438f63800"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}