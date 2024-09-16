// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "fireapp-4d056.firebaseapp.com",
  databaseURL: "https://fireapp-4d056.firebaseio.com",
  projectId: "fireapp-4d056",
  storageBucket: "fireapp-4d056.appspot.com",
  messagingSenderId: "710327222873",
  appId: "1:710327222873:web:0d081b4ccccaac320d6748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);