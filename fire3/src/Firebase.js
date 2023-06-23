// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZKHHr_fHjT3JWb-dw2H1rP7FjXGAP2nw",
  authDomain: "fire3-d3a89.firebaseapp.com",
  projectId: "fire3-d3a89",
  storageBucket: "fire3-d3a89.appspot.com",
  messagingSenderId: "69458006922",
  appId: "1:69458006922:web:00939a4606be845f836e73",
  measurementId: "G-QEZZDNYGT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export {auth}