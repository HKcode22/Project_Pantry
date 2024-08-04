// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNZTyzxhXUvOXI81jIcYBc9C84IDSua0M",
  authDomain: "inventory-managment-7263e.firebaseapp.com",
  projectId: "inventory-managment-7263e",
  storageBucket: "inventory-managment-7263e.appspot.com",
  messagingSenderId: "914296692210",
  appId: "1:914296692210:web:963b2b864e348850ca1f6b",
  measurementId: "G-CH4RXTPNMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}