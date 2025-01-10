// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-38773.firebaseapp.com",
  projectId: "mern-real-estate-38773",
  storageBucket: "mern-real-estate-38773.appspot.com",
  messagingSenderId: "200897275017",
  appId: "1:200897275017:web:f26a25308d89d192cb9258"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);