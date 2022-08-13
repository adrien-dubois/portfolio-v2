import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = 
{
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PORJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
}