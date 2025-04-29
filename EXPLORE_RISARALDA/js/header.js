document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu-container");
  const profileIcon = document.querySelector("#p-icon");

  profileIcon.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
  });

  // Cierra el menú si se hace clic fuera de él
  document.addEventListener("click", (event) => {
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
    if (!notiContainer.contains(event.target)) {
      notiContainer.classList.remove("active");
    }
  });
});

// funcionalidad del header con responsive

const hamburgerMenu = document.querySelector(".hamburger-menu");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const closeIcon = document.querySelector(".fullscreen-menu .close-icon");

hamburgerMenu.addEventListener("click", () => {
  fullscreenMenu.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  fullscreenMenu.classList.remove("active");
});



