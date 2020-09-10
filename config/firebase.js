import * as firebase from "firebase"
import  "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyXuvV3j3oKAhf7Uw8KeLYLylseH1Nd9k",
    authDomain: "app-database-e9221.firebaseapp.com",
    databaseURL: "https://app-database-e9221.firebaseio.com",
    projectId: "app-database-e9221",
    storageBucket: "app-database-e9221.appspot.com",
    messagingSenderId: "874944920963",
    appId: "1:874944920963:web:7bda9253e278e4ffaf8ab6",
    measurementId: "G-K7FQVGJFEE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase
