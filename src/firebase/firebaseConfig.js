
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyeg8NTaBiCrO-nb_tbN2-3E7FjU_pND8",
  authDomain: "superlink-ad619.firebaseapp.com",
  projectId: "superlink-ad619",
  storageBucket: "superlink-ad619.appspot.com",
  messagingSenderId: "477157847394",
  appId: "1:477157847394:web:1d6b464c030fc4a611bc3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)