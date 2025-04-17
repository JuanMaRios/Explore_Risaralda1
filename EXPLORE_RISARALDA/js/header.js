document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector(".menu-container");
    const profileIcon = document.querySelector(".profile-icon");

    profileIcon.addEventListener("click", () => {
        menuContainer.classList.toggle("active");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        event.preventDefault();
        if (!menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });
});