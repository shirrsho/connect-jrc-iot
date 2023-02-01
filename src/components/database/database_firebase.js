// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKK46Pt3QXzfecY-g10NlxYOTAZ_zXE5k",
  authDomain: "connect-jrc-iot.firebaseapp.com",
  projectId: "connect-jrc-iot",
  storageBucket: "connect-jrc-iot.appspot.com",
  messagingSenderId: "858821645070",
  appId: "1:858821645070:web:cab2a6f28f77bfe4d83d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}