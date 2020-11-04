import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCK59SaCvvIPXTONGItIxUpXGs6QlZYgOY",
  authDomain: "crwn-db-25396.firebaseapp.com",
  databaseURL: "https://crwn-db-25396.firebaseio.com",
  projectId: "crwn-db-25396",
  storageBucket: "crwn-db-25396.appspot.com",
  messagingSenderId: "904944533159",
  appId: "1:904944533159:web:42645b4dcb63ce84c16582",
  measurementId: "G-TNR4YYGG7N",
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
