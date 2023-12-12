// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5YwR103nvITKPlOdMzJkWZfBMyu4ncoQ",
  authDomain: "legi-companion.firebaseapp.com",
  projectId: "legi-companion",
  storageBucket: "legi-companion.appspot.com",
  messagingSenderId: "873431152146",
  appId: "1:873431152146:web:4f8b5040294b58d9534acb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
export default app;
export { auth, db, storage };
