// menu hambur
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#aMenu");
const cerrar = document.querySelector("#cMenu");

abrir.addEventListener("click", () => {
  nav.classList.add("nav-visi");
});
cerrar.addEventListener("click", () => {
  nav.classList.remove("nav-visi");
});
// mostrar barra de progreso
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", function () {
  output.textContent = price.value + "Mts";
});
