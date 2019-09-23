import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA-VuKmOxTliQGkMUNlGp0VxdNCUm8aPjs",
  authDomain: "crwn-db-5de91.firebaseapp.com",
  databaseURL: "https://crwn-db-5de91.firebaseio.com",
  projectId: "crwn-db-5de91",
  storageBucket: "",
  messagingSenderId: "851116901872",
  appId: "1:851116901872:web:d4cad0ba2aca2a64114935"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
