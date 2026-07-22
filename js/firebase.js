// Firebase

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";



const firebaseConfig = {

    apiKey: "AIzaSyDCEF70xvj3DsCWuONIqyC4dq38OQ0eScA",

    authDomain: "nutritrack-v3.firebaseapp.com",

    projectId: "nutritrack-v3",

    storageBucket: "nutritrack-v3.firebasestorage.app",

    messagingSenderId: "789592608860",

    appId: "1:789592608860:web:c5135f9b2ae2ab7dd21699",

    measurementId: "G-RQP7M0BR8Z"

};


// Initialisation

const app = initializeApp(firebaseConfig);


// Services Firebase

const auth = getAuth(app);

const db = getFirestore(app);


// Export

export {

    auth,

    db

};