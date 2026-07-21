// ======================================
// NutriTrack - Gestion générale de l'app
// ======================================


// Import Firebase Auth
import { checkAuth } from "./auth.js";


// Vérifie si l'utilisateur est connecté

checkAuth((user) => {


    // Si aucun utilisateur connecté
    if (!user) {


        // Redirection vers connexion
        window.location.href =
        "pages/connexion.html";


        return;

    }


    // Si utilisateur connecté
    console.log(
        "Utilisateur connecté :",
        user.email
    );


    // Affichage du pseudo si l'élément existe

    const username =
    document.getElementById("username");


    if(username){

        username.textContent =
        user.displayName || "Utilisateur";

    }


});