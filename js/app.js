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

// ====================================
// NUTRITRACK - APP.JS
// ====================================

// ----- Récupération des éléments -----

const accueilSection = document.getElementById("accueilSection");
const profilSection = document.getElementById("profilSection");
const calendrierSection = document.getElementById("calendrierSection");
const bibliothequeSection = document.getElementById("bibliothequeSection");

const homeButton = document.getElementById("homeButton");
const profileButton = document.getElementById("profileButton");
const calendarButton = document.getElementById("calendarButton");
const libraryButton = document.getElementById("libraryButton");
const mealButton = document.getElementById("mealButton");

const settingsButton = document.getElementById("settingsButton");
const settingsMenu = document.getElementById("settingsMenu");

const addMealButton = document.getElementById("addMealButton");


// ====================================
// FONCTIONS
// ====================================


// Cache toutes les sections

function hideAllSections() {

    accueilSection.style.display = "none";

    profilSection.style.display = "none";

    calendrierSection.style.display = "none";

    bibliothequeSection.style.display = "none";

}


// Affiche l'accueil

function showAccueil() {

    hideAllSections();

    accueilSection.style.display = "block";

}


// Affiche le profil

function showProfil() {

    hideAllSections();

    profilSection.style.display = "block";

}


// Affiche le calendrier

function showCalendrier() {

    hideAllSections();

    calendrierSection.style.display = "block";

}


// Affiche la bibliothèque

function showBibliotheque() {

    hideAllSections();

    bibliothequeSection.style.display = "block";

}


// ====================================
// NAVIGATION
// ====================================


if (homeButton) {

    homeButton.addEventListener("click", () => {

        showAccueil();

    });

}


if (profileButton) {

    profileButton.addEventListener("click", () => {

        showProfil();

    });

}


if (calendarButton) {

    calendarButton.addEventListener("click", () => {

        showCalendrier();

    });

}


if (libraryButton) {

    libraryButton.addEventListener("click", () => {

        showBibliotheque();

    });

}



// ====================================
// AJOUTER UN REPAS
// ====================================


if (addMealButton) {

    addMealButton.addEventListener("click", () => {

        alert("Ajouter un repas (bientôt disponible).");

    });

}


if (mealButton) {

    mealButton.addEventListener("click", () => {

        alert("Ajouter un repas (bientôt disponible).");

    });

}



// ====================================
// MENU PARAMÈTRES
// ====================================


if (settingsButton) {

    settingsButton.addEventListener("click", () => {

        if (settingsMenu.style.display === "block") {

            settingsMenu.style.display = "none";

        }

        else {

            settingsMenu.style.display = "block";

        }

    });

}



// ====================================
// INITIALISATION
// ====================================


// Au lancement de l'application,
// on affiche toujours l'accueil.

showAccueil();