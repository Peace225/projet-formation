import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2nG-R3gd2hJa0389CGTjGi7MTE-vFtoY",
  authDomain: "formation-expert.firebaseapp.com",
  projectId: "formation-expert",
  storageBucket: "formation-expert.firebasestorage.app",
  messagingSenderId: "586938849522",
  appId: "1:586938849522:web:d3dc9b67461e19d07bd86b",
  measurementId: "G-TV25YDGG88"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// C'est ici que la magie opère : on exporte auth et db pour que Register.jsx puisse les utiliser
export const auth = getAuth(app);
export const db = getFirestore(app);