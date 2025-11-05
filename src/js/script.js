// *** CAROUSEL ***
// Défilement précédent / suivant avec calcul dynamique de la largeur d'un item

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
    // Déterminer dynamiquement la largeur d'un item
    const getScrollAmount = () => {
        const premierItem = document.querySelector(".carousel__item");
        return premierItem ? premierItem.clientWidth : 260;
    };

    let scrollAmount = getScrollAmount();

    // Mettre à jour la valeur au redimensionnement
    window.addEventListener("resize", () => {
        scrollAmount = getScrollAmount();
    });

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
