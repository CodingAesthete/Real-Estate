import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9m5vXi6x5I_Ssh7wjLyikjK2KXw3UhQU",
  authDomain: "trial-estate.firebaseapp.com",
  projectId: "trial-estate",
  storageBucket: "trial-estate.appspot.com",
  messagingSenderId: "639100040704",
  appId: "1:639100040704:web:8ff3c6eb81b07af24c8ae5"
};

export const app = initializeApp(firebaseConfig);