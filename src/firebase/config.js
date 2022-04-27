import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVTRKEAz3mSUux4nIWfomA5VSMSjR6R5Q",
  authDomain: "thedojosite-a9a7b.firebaseapp.com",
  projectId: "thedojosite-a9a7b",
  storageBucket: "thedojosite-a9a7b.appspot.com",
  messagingSenderId: "780689934368",
  appId: "1:780689934368:web:63ec326eb1a282c2161445",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
