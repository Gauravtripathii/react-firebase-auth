import {getAuth} from 'firebase/auth';
import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnYvahR6313DqwwJvitWv5krMSv3RGdHE",
  authDomain: "react-firebase-auth-94f25.firebaseapp.com",
  projectId: "react-firebase-auth-94f25",
  storageBucket: "react-firebase-auth-94f25.appspot.com",
  messagingSenderId: "250616013354",
  appId: "1:250616013354:web:26a4a0ea54c569567c9953",
  measurementId: "G-784Y10Y35G",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
