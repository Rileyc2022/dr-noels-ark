import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoV3r5fpdw7LsHpDL2DL0yIu7gIqakk4k",
  authDomain: "dr-noels-ark.firebaseapp.com",
  projectId: "dr-noels-ark",
  storageBucket: "dr-noels-ark.appspot.com",
  messagingSenderId: "799353819923",
  appId: "1:799353819923:web:6818b54ffb0997e11280e6",
  measurementId: "G-GFQ20KD42E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
