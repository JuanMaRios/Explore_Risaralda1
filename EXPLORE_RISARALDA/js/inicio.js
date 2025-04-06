const nav= document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click" ,() => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
});
// Funcionamiento botones de galeria 













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