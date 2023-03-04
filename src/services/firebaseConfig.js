import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4W63YV8VotYbKwIPcCIGriBGwXOVBDI",
  authDomain: "catalogador-dc70d.firebaseapp.com",
  projectId: "catalogador-dc70d",
  storageBucket: "catalogador-dc70d.appspot.com",
  messagingSenderId: "23751166511",
  appId: "1:23751166511:web:259eb7202fc76a4e0714da",
  measurementId: "G-YDCFQYQK3B",
};

export const app = initializeApp(firebaseConfig);
