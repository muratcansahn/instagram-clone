import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyTE2cdU5mDbfQ9SSFoKdE-_f3Htze3jA",
  authDomain: "instagram-clone-59b8d.firebaseapp.com",
  projectId: "instagram-clone-59b8d",
  storageBucket: "instagram-clone-59b8d.appspot.com",
  messagingSenderId: "936072083709",
  appId: "1:936072083709:web:df92bac4457a5876132694",
  measurementId: "G-7RC6LT2ZFE",
});

///access to db
const db = firebaseApp.firestore();

//access to auth services(log in,log out etc.)
const auth = firebase.auth();

//for uploading stuff like images etc.
const storage = firebase.storage();

export { db, auth, storage };
