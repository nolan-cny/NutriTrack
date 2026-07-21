// Import des modules Firebase depuis le CDN

import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
    getAuth 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { 
    getFirestore 
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Import de la configuration
import { firebaseConfig } from "./config.js";


// Initialisation Firebase
const app = initializeApp(firebaseConfig);


// Initialisation Authentication
const auth = getAuth(app);


// Initialisation Firestore
const db = getFirestore(app);


// Export pour les autres fichiers
export {
    app,
    auth,
    db
};