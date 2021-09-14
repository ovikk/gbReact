// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyANtBaeDjrPPzY6TIrjq8CMvSB3Az5agL0",
  authDomain: "gb-react-project-350cd.firebaseapp.com",
  projectId: "gb-react-project-350cd",
  storageBucket: "gb-react-project-350cd.appspot.com",
  messagingSenderId: "524675586930",
  appId: "1:524675586930:web:571c4afa11c8f74e439beb",
};

export const app = initializeApp(firebaseConfig);

export const authFirebase = firebaseAuth;
