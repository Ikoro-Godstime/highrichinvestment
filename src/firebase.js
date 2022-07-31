import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYc95m2VCCIToRb90cI5lQGV2vYncX8ng",
  authDomain: "highrichinvestment.firebaseapp.com",
  projectId: "highrichinvestment",
  storageBucket: "highrichinvestment.appspot.com",
  messagingSenderId: "922428872752",
  appId: "1:922428872752:web:e349e22bce4abe6a63b5f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
