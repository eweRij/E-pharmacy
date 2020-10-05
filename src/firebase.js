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
  appId: "1:1088549891322:web:44fc0b43e499cc2b522d43";
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
console.log(auth);
export const firestore = firebase.firestore();

// REACT_APP_API_KEY = "AIzaSyBSSvTFqPxkcI5mz9suctBy5ab3h583C4s";

// REACT_APP_AUTHDOMAIN = "e-pharmacy-290822.firebaseapp.com";

// REACT_APP_BASEURL = "https://e-pharmacy-290822.firebaseio.com";

// REACT_APP_PROJECT_ID = "e-pharmacy-290822";

// REACT_APP_STORAGEBUCKET = "e-pharmacy-290822.appspot.com";

// REACT_APP_MESSAGING_SENDER_ID = "1088549891322";

// REACT_APP_APP_ID = "1:1088549891322:web:44fc0b43e499cc2b522d43";

// REACT_APP_MEASUREMENT_ID = "G-X8PQL9HHDQ";
