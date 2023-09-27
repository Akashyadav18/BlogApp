// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-app-392303.firebaseapp.com",
  projectId: "blog-app-392303",
  storageBucket: "blog-app-392303.appspot.com",
  messagingSenderId: "381971281736",
  appId: "1:381971281736:web:5c4058231c983e69aa257d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);