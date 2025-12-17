import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const Config = {
  apiKey: "AIzaSyCmMpkV4FQKCf5L4gutv-mQZjm2FqGEXT8",
  authDomain: "crwn-db-8eb39.firebaseapp.com",
  projectId: "crwn-db-8eb39",
  storageBucket: "crwn-db-8eb39.appspot.com",
  messagingSenderId: "669758952616",
  appId: "1:669758952616:web:4d88146f47dc16fd969e9d",
  measurementId: "G-VWE9YZERCB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Create a reference to the user in the database
  const snapShot = await userRef.get(); // Get the snapshot of the user

  if (!snapShot.exists) {
    // If the user does not exist in the database, create a new user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Try to create a new user in the database
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      // If there is an error, log the error
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
