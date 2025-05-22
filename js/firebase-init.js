// js/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9IwlIc-r-X3U2NqQArFZlH9d8lFp7PXo",
  authDomain: "figuras-db.firebaseapp.com",
  projectId: "figuras-db",
  storageBucket: "figuras-db.firebasestorage.app",
  messagingSenderId: "9650763402",
  appId: "1:9650763402:web:0f0aa2deb20701e3475f73"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.firebaseDocs = { doc, getDoc, setDoc };
