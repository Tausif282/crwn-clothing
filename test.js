import firebase from "firebase/app";

import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("BptqyPHKhogv8HpKwCN6")
  .collection("cartItems")
  .doc("YhEzkVOO8mZ4paujYBvy");

firestore.doc("/users/BptqyPHKhogv8HpKwCN6/cartItems/YhEzkVOO8mZ4paujYBvy");

firestore.collection("/users/BptqyPHKhogv8HpKwCN6/cartItems/");
