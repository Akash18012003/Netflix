
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZte2tYeTmhnNYygXMUJ7TA1w_0QTsDGA",
  authDomain: "react-netflix-clone-83aea.firebaseapp.com",
  projectId: "react-netflix-clone-83aea",
  storageBucket: "react-netflix-clone-83aea.appspot.com",
  messagingSenderId: "474402054824",
  appId: "1:474402054824:web:3d2fb861bd32a2a3a6d89d",
  measurementId: "G-MW9FJL9S9D"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);