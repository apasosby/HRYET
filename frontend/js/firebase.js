// ==========================================
// HRYET - FIREBASE CONFIG
// ==========================================

// IMPORTAR FIREBASE (VERSIÓN CDN)

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";


// CONFIGURACIÓN FIREBASE
// (LA COMPLETAREMOS CUANDO CREEMOS EL PROYECTO)

const firebaseConfig = {

apiKey: "",

authDomain: "",

projectId: "",

storageBucket: "",

messagingSenderId: "",

appId: ""

};


// INICIALIZAR FIREBASE

const app = initializeApp(firebaseConfig);


// SERVICIOS

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);