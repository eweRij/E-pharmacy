import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBSSvTFqPxkcI5mz9suctBy5ab3h583C4s",
  authDomain: "e-pharmacy-290822.firebaseapp.com",
  databaseURL: "https://e-pharmacy-290822.firebaseio.com",
  projectId: "e-pharmacy-290822",
  storageBucket: "e-pharmacy-290822.appspot.com",
  messagingSenderId: "1088549891322",
  appId: "1:1088549891322:web:44fc0b43e499cc2b522d43",
  measurementId: "G-X8PQL9HHDQ",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

console.log(auth);
