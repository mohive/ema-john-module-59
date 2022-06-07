// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFJsqBQ5dHoYQLT9cy5lKS6TvhFAlgmYA",
  authDomain: "ema-john-simple-c7e94.firebaseapp.com",
  projectId: "ema-john-simple-c7e94",
  storageBucket: "ema-john-simple-c7e94.appspot.com",
  messagingSenderId: "122211999275",
  appId: "1:122211999275:web:5ca8ad2f5951cc0aa5946e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);

 export default auth;