// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsL31vYpnnUqmLgK_XoaEptQj1ztGr8ac",
  authDomain: "kangsayur-app-f3a15.firebaseapp.com",
  projectId: "kangsayur-app-f3a15",
  storageBucket: "kangsayur-app-f3a15.appspot.com",
  messagingSenderId: "468894058456",
  appId: "1:468894058456:web:e9da435c66d5ca520094ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);