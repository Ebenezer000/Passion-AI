// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgrbIldLfrLyvWrT7Sv629Bj4IDSivALk",
  authDomain: "passionai-cb2c1.firebaseapp.com",
  projectId: "passionai-cb2c1",
  storageBucket: "passionai-cb2c1.firebasestorage.app",
  messagingSenderId: "345697906707",
  appId: "1:345697906707:web:1b1f55e9bddbba98008fe6",
  measurementId: "G-D676P38552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const database = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
