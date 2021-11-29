import firebase from 'firebase'
// require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCAi-7cXhqWbKf8cmvcCMy4IlAoDzzaOV4",
  authDomain: "bedtime-stories-eed65.firebaseapp.com",
  projectId: "bedtime-stories-eed65",
  storageBucket: "bedtime-stories-eed65.appspot.com",
  messagingSenderId: "820040718253",
  appId: "1:820040718253:web:b04c5731efb3462b5e7324"
  };


// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}else {
   firebase.app(); // if already initialized, use that one
}

export default  firebase.firestore()
