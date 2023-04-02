import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyAOP6Q7qBOG7YGAx8B4U4yNBDSF7_TzaII",
    authDomain: "react-hooks-blog-79da5.firebaseapp.com",
    projectId: "react-hooks-blog-79da5",
    storageBucket: "react-hooks-blog-79da5.appspot.com",
    messagingSenderId: "71556831967",
    appId: "1:71556831967:web:41255d05548b79e409276a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();