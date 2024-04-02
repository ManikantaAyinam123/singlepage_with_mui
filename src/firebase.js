
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-wl3AxO94hKDMPUGU6FzauhTeZjw08zM",
  authDomain: "todo-1e7da.firebaseapp.com",
  databaseURL: "https://todo-1e7da-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todo-1e7da",
  storageBucket: "todo-1e7da.appspot.com",
  messagingSenderId: "906698697982",
  appId: "1:906698697982:web:28345e1eff31a70a85c9af",
  measurementId: "G-SYMGS9LKYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);