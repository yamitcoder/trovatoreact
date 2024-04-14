// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6cdZ9Tl-G4B23IUQYT884571wkBo_n7k",
  authDomain: "coderhouse-3b44d.firebaseapp.com",
  projectId: "coderhouse-3b44d",
  storageBucket: "coderhouse-3b44d.appspot.com",
  messagingSenderId: "673853105854",
  appId: "1:673853105854:web:5095f5817cd9647c5e20ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)