document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.querySelector(".menu-container");
  const profileIcon = document.querySelector("#p-icon");

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

// funcionalidad del header con responsive

const hamburgerMenu = document.querySelector('.hamburger-menu');
const fullscreenMenu = document.getElementById('fullscreen-menu');
const closeIcon = document.querySelector('.fullscreen-menu .close-icon');

hamburgerMenu.addEventListener('click', () => {
  fullscreenMenu.classList.add('active');
});

closeIcon.addEventListener('click', () => {
  fullscreenMenu.classList.remove('active');
});
// Funcionamiento botones de galeria 
















// slider de testimonios 
const productContainer = [...document.querySelectorAll(".contenedor")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainer.forEach((item, i) => {
  let dimensiones = item.getBoundingClientRect();
  let cWidth = dimensiones.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += cWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= cWidth;
  });
});

const productContainer1 = [...document.querySelectorAll(".contenedor1")];
const nextBtn1 = [...document.querySelectorAll(".next-btn1")];
const preBtn1 = [...document.querySelectorAll(".pre-btn1")];

productContainer1.forEach((item, i) => {
  let dimensiones = item.getBoundingClientRect();
  let cWidth = dimensiones.width;

  nextBtn1[i].addEventListener("click", () => {
    item.scrollLeft += cWidth;
  });

  preBtn1[i].addEventListener("click", () => {
    item.scrollLeft -= cWidth;
  });
});











// ir arriba
function smoothScroll(targetY, duration) {
    let start = window.scrollY;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
  
      let timeElapsed = currentTime - startTime;
      let progress = Math.min(timeElapsed / duration, 1);
  
      window.scrollTo(0, start + (targetY - start) * progress);
  
      if (progress < 1) requestAnimationFrame(animation);
    }
  
    requestAnimationFrame(animation);
  }
  
  document.getElementById("scrollBtn").addEventListener("click", () =>
    smoothScroll(0, 1000)
  );



