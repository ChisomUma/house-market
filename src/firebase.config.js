
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBdGBJCAOEzL-frBbfLWTQqlQ8CNnHDHg",
  authDomain: "house-marketplace-app-9d010.firebaseapp.com",
  projectId: "house-marketplace-app-9d010",
  storageBucket: "house-marketplace-app-9d010.appspot.com",
  messagingSenderId: "28064298042",
  appId: "1:28064298042:web:28ccd32054cef2a2a3b103"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()