import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDceNhOIaylry89mTHdL3eeuyvcWefiA4I",
  authDomain: "vue-demo3-5b058.firebaseapp.com",
  projectId: "vue-demo3-5b058",
  storageBucket: "vue-demo3-5b058.appspot.com",
  messagingSenderId: "557291302615",
  appId: "1:557291302615:web:e986b7f4471a734e434a92",
  measurementId: "G-T9JPYY7Y2W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
