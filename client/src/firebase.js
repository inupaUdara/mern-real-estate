// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-863d3.firebaseapp.com",
  projectId: "mern-estate-863d3",
  storageBucket: "mern-estate-863d3.appspot.com",
  messagingSenderId: "829838810205",
  appId: "1:829838810205:web:9a36347ea357b839fec1b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);