const nav= document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click" ,() => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});


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
