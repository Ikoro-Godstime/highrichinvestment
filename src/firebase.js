import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqFkM_yPaWt0z8Df_31OoZ-iqd67X8naI",
  authDomain: "quickiebooks-8800f.firebaseapp.com",
  projectId: "quickiebooks-8800f",
  storageBucket: "quickiebooks-8800f.appspot.com",
  messagingSenderId: "463818993905",
  appId: "1:463818993905:web:25b9431d9b5a1e4e5db950",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
