// *** CAROUSEL ***
// Implémentation de base: défilement précédent / suivant (valeur fixe)

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
    const scrollAmount = 260; // valeur de base fixe pour le test initial

    // Scroll au clic sur le bouton précédent
    if (prevButton) {
        prevButton.addEventListener("click", () => {
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });
    }

    // Scroll au clic sur le bouton suivant
    if (nextButton) {
        nextButton.addEventListener("click", () => {
            carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });
        });
    }
}
