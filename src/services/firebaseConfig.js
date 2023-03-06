import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMq1RDWdbZqCadsT4Y5xw_T0Fh5VDhge8",
  authDomain: "conversor-assina.firebaseapp.com",
  projectId: "conversor-assina",
  storageBucket: "conversor-assina.appspot.com",
  messagingSenderId: "793101150635",
  appId: "1:793101150635:web:ecc28425ee3e648b9b4aee",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
