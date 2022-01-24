import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAh6Ju9-B4Wf3Js3Qo-Au9FlBl1Xsilo9w",
  authDomain: "register-with-firebase-8788e.firebaseapp.com",
  projectId: "register-with-firebase-8788e",
  storageBucket: "register-with-firebase-8788e.appspot.com",
  messagingSenderId: "424251044454",
  appId: "1:424251044454:web:5b7fe7ca13cfca552833a7",
  measurementId: "G-TM0082D87N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);