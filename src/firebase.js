// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase"

// const firebaseConfig = {
//     apiKey: "AIzaSyD1vWIuwniHeXC6kXdjJJ6MoYHYL6m2UIc",
//     authDomain: "clone-8eab6.firebaseapp.com",
//     projectId: "clone-8eab6",
//     storageBucket: "clone-8eab6.appspot.com",
//     messagingSenderId: "557287716382",
//     appId: "1:557287716382:web:9b4ab878196b7d9301200f",
//     measurementId: "G-REV7Z2T4PW"
//   };

//   const firebaseApp =firebase.initializeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth =firebase.auth();

//   export{db,auth};
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1vWIuwniHeXC6kXdjJJ6MoYHYL6m2UIc",
    authDomain: "clone-8eab6.firebaseapp.com",
    projectId: "clone-8eab6",
    storageBucket: "clone-8eab6.appspot.com",
    messagingSenderId: "557287716382",
    appId: "1:557287716382:web:9b4ab878196b7d9301200f",
    measurementId: "G-REV7Z2T4PW"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };