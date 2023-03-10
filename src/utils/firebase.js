import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiSFU9c5ICRBK53ZdIFAOvGS9lO4HCmXk",
  authDomain: "lovebirdz-759c8.firebaseapp.com",
  projectId: "lovebirdz-759c8",
  storageBucket: "lovebirdz-759c8.appspot.com",
  messagingSenderId: "523147836216",
  appId: "1:523147836216:web:58cf3a3e2ec164853fdfcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
