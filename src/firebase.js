
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDWTKrEJ_dTeDX79Smmect0hffML1UU1ok",
    authDomain: "signup-dfcef.firebaseapp.com",
    projectId: "signup-dfcef",
    storageBucket: "signup-dfcef.appspot.com",
    messagingSenderId: "345446571716",
    appId: "1:345446571716:web:c44dcc851a77879cd73391",
    measurementId: "G-FFDG89NL4D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db= getFirestore()
export default {app};
