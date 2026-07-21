const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

const addMealBtn = document.getElementById("add-meal-btn");

if (addMealBtn) {

    addMealBtn.addEventListener("click", () => {

        alert("Page Ajouter un repas (à venir)");

    });

}