import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKK46Pt3QXzfecY-g10NlxYOTAZ_zXE5k",
  authDomain: "connect-jrc-iot.firebaseapp.com",
  projectId: "connect-jrc-iot",
  storageBucket: "connect-jrc-iot.appspot.com",
  messagingSenderId: "858821645070",
  appId: "1:858821645070:web:cab2a6f28f77bfe4d83d5f",
  databaseURL: "https://connect-jrc-iot-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }