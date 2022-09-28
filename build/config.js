import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBr13bO6h8mYlDfaRCSuvZE2SSJYsWl_GU",
    authDomain: "login-firebase322.firebaseapp.com",
    projectId: "login-firebase322",
    storageBucket: "login-firebase322.appspot.com",
    messagingSenderId: "807045597532",
    appId: "1:807045597532:web:ace034ad26728efecad999",
    measurementId: "G-H1RYMERKPN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);