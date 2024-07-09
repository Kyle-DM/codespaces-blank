import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAajEFNjJv8nE0dN-xbk68ubS3C7FqJ9lg",
  authDomain: "auth-tutorial-eca9c.firebaseapp.com",
  projectId: "auth-tutorial-eca9c",
  storageBucket: "auth-tutorial-eca9c.appspot.com",
  messagingSenderId: "582395185056",
  appId: "1:582395185056:web:3a775b64e0301bc73b46c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);