import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoNoiTkueaqHxBwEUig3d9BX0taTjr3jc",
  authDomain: "hryet-f2de3.firebaseapp.com",
  projectId: "hryet-f2de3",
  storageBucket: "hryet-f2de3.firebasestorage.app",
  messagingSenderId: "839699465873",
  appId: "1:839699465873:web:4cbb72d912c676b537a130",
  measurementId: "G-8DK6LSF1TT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };