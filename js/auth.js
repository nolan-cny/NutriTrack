// ======================================
// NutriTrack - Gestion authentification
// ======================================


// Import Firebase
import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    updateProfile
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {
    doc,
    setDoc,
    getDoc
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// Fournisseur Google
const googleProvider = new GoogleAuthProvider();


// ======================================
// INSCRIPTION
// ======================================

export async function registerUser(email, password, pseudo) {

    try {

        // Création du compte Firebase Authentication
        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


        const user = userCredential.user;


        // Ajout du pseudo Firebase
        await updateProfile(user, {
            displayName: pseudo
        });


        // Création du profil Firestore
        const userData = {

        uid: user.uid,
        pseudo: pseudo,
        email: email,

        age: null,
        taille: null,
        poidsActuel: null,

        objectif: "maintien",
        objectifCalories: 2000,

        avatar: "assets/avatars/avatar1.png",

        createdAt: new Date()

    };


await setDoc(
    doc(db, "users", user.uid),
    userData
);


console.log(
"Profil Firestore créé :",
userData
);


        console.log("Compte créé");


        return user;


    } catch(error){

        console.error(error.message);

        throw error;

    }

}



// ======================================
// CONNEXION EMAIL
// ======================================


export async function loginUser(email,password){

    try{

        const result =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );


        return result.user;


    }catch(error){

        console.error(error.message);

        throw error;

    }

}




// ======================================
// CONNEXION GOOGLE
// ======================================


export async function loginGoogle(){


    try{


        const result =
        await signInWithPopup(
            auth,
            googleProvider
        );


        const user = result.user;


        // Vérifie si le profil existe déjà

        const userRef =
        doc(db,"users",user.uid);


        const userSnap =
        await getDoc(userRef);



        if(!userSnap.exists()){


            await setDoc(
                userRef,
                {

                    uid:user.uid,

                    pseudo:
                    user.displayName || "Utilisateur",

                    email:user.email,


                    age:null,
                    taille:null,
                    poidsActuel:null,

                    objectif:"maintien",

                    objectifCalories:2000,

                    avatar:
                    "assets/avatars/avatar1.png",

                    createdAt:
                    new Date()

                }
            );

        }



        return user;



    }catch(error){

        console.error(error.message);

        throw error;

    }

}



// ======================================
// DECONNEXION
// ======================================


export async function logoutUser(){

    await signOut(auth);

}



// ======================================
// SURVEILLANCE DE SESSION
// ======================================


export function checkAuth(callback){


    onAuthStateChanged(
        auth,
        (user)=>{

            callback(user);

        }
    );


}