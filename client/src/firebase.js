// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5180.firebaseapp.com",
  projectId: "mern-blog-5180",
  storageBucket: "mern-blog-5180.appspot.com",
  messagingSenderId: "354754329109",
  appId: "1:354754329109:web:140d777b7f30b445faec1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
