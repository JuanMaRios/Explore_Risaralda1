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