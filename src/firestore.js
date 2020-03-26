import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/storage'
 import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA3BcouwjmbH4K4icDIK73MiYe_JBJCryQ",
    authDomain: "svelte-users-50a77.firebaseapp.com",
    databaseURL: "https://svelte-users-50a77.firebaseio.com",
    projectId: "svelte-users-50a77",
    storageBucket: "svelte-users-50a77.appspot.com",
    messagingSenderId: "477126381989",
    appId: "1:477126381989:web:64750d1c7d70afefce184c",
    measurementId: "G-2T1SRGYY29"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // const storage = firebase.storage()
   const auth = firebase.auth()
  export const db = firebase.firestore()
  
   export  {
      auth 
   }
  