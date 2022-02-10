// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbjqzpkyHh_W8bYJJacBF4Frr9Yi8X3w8",
  authDomain: "he-admin-b9e4b.firebaseapp.com",
  projectId: "he-admin-b9e4b",
  storageBucket: "he-admin-b9e4b.appspot.com",
  messagingSenderId: "16181424960",
  appId: "1:16181424960:web:af44b49ec67a5c147fc0a5",
  measurementId: "G-28R245V9ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase();
