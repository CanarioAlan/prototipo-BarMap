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

// map
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hlZm9yIiwiYSI6ImNsbGppdzMzejE4NHczbXVsbHFpbGUzbWoifQ.IKfPsNOSuvReSFWZ87_RDg";
const mapa = new mapboxgl.Map({
  container: "contend-mapa",
  style: "mapbox://styles/mapbox/outdoors-v11",
  center: [-60.7092999, -31.6427484],
  zoom: 14,
});
const marcador = new mapboxgl.Marker({
  color: "green",
})
  .setLngLat([-60.710715, -31.642394])
  .addTo(mapa);
const popup = new mapboxgl.Popup({}).setText("hello");
const marcador2 = new mapboxgl.Marker({})
  .setLngLat([-60.710099, -31.6400568])
  .setPopup(popup)
  .addTo(mapa);
