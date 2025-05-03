// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBST1xHSMuBpB5Ufp4HvMzhV5b0YmP6sVg",
  authDomain: "netflix-gpt-964f2.firebaseapp.com",
  projectId: "netflix-gpt-964f2",
  storageBucket: "netflix-gpt-964f2.firebasestorage.app",
  messagingSenderId: "271509016411",
  appId: "1:271509016411:web:e1d9d59ba76b3885f7947e",
  measurementId: "G-NR1TF10X27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();