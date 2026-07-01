import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


// REGISTRO
export async function register(name, email, password) {

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {

    uid: user.uid,

    nombre: name,

    email: email,

    qr: "",

    likes: 0,

    scans: 0,

    createdAt: new Date()

  });

  return user;

}


// LOGIN
export async function login(email, password) {

  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

}


// CERRAR SESIÓN
export async function logout() {

  await signOut(auth);

}