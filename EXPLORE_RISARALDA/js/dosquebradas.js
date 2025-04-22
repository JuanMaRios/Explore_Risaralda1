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
  


// primer boton de despliegue 
const botonDesple = document.getElementById('boton-desple');
const mainDesplegable = document.getElementById('main-desplegable');

botonDesple.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    if (mainDesplegable.style.display === 'none' || mainDesplegable.style.display === '') {
        mainDesplegable.style.display = 'flex';
    } else {
        mainDesplegable.style.display = 'none';
    }
});

// segundo boton de despliegue
const botonDesple1 = document.getElementById('boton-desple1');
const mainDesplegable1 = document.getElementById('main-desplegable1');

botonDesple1.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    if (mainDesplegable1.style.display === 'none' || mainDesplegable1.style.display === '') {
        mainDesplegable1.style.display = 'flex';
    } else {
        mainDesplegable1.style.display = 'none';
    }
});
// tercer boton de despliegue
const botonDesple2 = document.getElementById('boton-desple2');
const mainDesplegable2 = document.getElementById('main-desplegable2');

botonDesple2.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    if (mainDesplegable2.style.display === 'none' || mainDesplegable2.style.display === '') {
        mainDesplegable2.style.display = 'flex';
    } else {
        mainDesplegable2.style.display = 'none';
    }
});
