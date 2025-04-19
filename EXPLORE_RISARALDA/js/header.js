document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.querySelector(".menu-container");
    const profileIcon = document.querySelector(".profile-icon");

    profileIcon.addEventListener("click", () => {
        menuContainer.classList.toggle("active");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        // event.preventDefault();
        if (!menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active");
        }
    });
});

// funcionalidad de notificaciones
document.addEventListener("DOMContentLoaded", () => {
    const notiContainer = document.querySelector(".noti-container");
    const notiIcon = document.querySelector(".noti-icon");

    notiIcon.addEventListener("click", () => {
        notiContainer.classList.toggle("active");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        // event.preventDefault();
        if (!notiContainer.contains(event.target)) {
            notiContainer.classList.remove("active");
        }
    });
});

