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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if no logged in user, just return.
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
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
