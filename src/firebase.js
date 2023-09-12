import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // apiKey: "AIzaSyDprDBZH6r0Eb_6aVD6fHaqSTQ8GhqVqx8",
    authDomain: "faceattendance-rtdb.firebaseapp.com",
    databaseURL: "https://faceattendance-rtdb-default-rtdb.firebaseio.com",
    projectId: "faceattendance-rtdb",
    storageBucket: "faceattendance-rtdb.appspot.com",
    messagingSenderId: "389376446426",
    appId: "1:389376446426:web:8ea4c9bc6f8cc0743b3ae3",
    measurementId: "G-X8H1BRDN4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const rtdb = getDatabase(app);
export const storage = getStorage(app, "faceattendance-rtdb.appspot.com");
// export const storage = getStorage(app);