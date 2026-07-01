import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "...",
authDomain: "...",
projectId: "...",
storageBucket: "...",
messagingSenderId: "...",
appId: "...",
measurementId: "..."
};

apiKey:"TU_API_KEY",

authDomain:"TU_AUTH_DOMAIN",

projectId:"TU_PROJECT_ID",

storageBucket:"TU_STORAGE_BUCKET",

messagingSenderId:"TU_SENDER_ID",

appId:"TU_APP_ID"

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

};