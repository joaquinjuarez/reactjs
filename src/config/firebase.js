
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbq9ognDIITUuObVCbCfwz_oJEClAWH0Y",
  authDomain: "proyecto-final-eee68.firebaseapp.com",
  projectId: "proyecto-final-eee68",
  storageBucket: "proyecto-final-eee68.appspot.com",
  messagingSenderId: "896912867541",
  appId: "1:896912867541:web:5dfe798a7d9e7a6825225c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);