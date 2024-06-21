// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCMm1Hijsc9IGXTCOQIMxkCantRbzkd2U",
  authDomain: "real-time-chatapp-c4603.firebaseapp.com",
  projectId: "real-time-chatapp-c4603",
  storageBucket: "real-time-chatapp-c4603.appspot.com",
  messagingSenderId: "723053894977",
  appId: "1:723053894977:web:25f0c45f45ee0aab5615c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()