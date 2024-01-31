import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
import { sortBy, filterBy, calculaMediaVida, calculaMediaAltura } from './dataFunctions.js';

const root = document.getElementById("root");
root.innerHTML = renderItems(data);

const footer = document.querySelector("footer");
const body = footer.parentNode;
const imgLogoFooter = document.createElement("img");
imgLogoFooter.setAttribute("id", "logo__footer");
imgLogoFooter.src = "/assets/logo.jpg";
body.insertBefore(imgLogoFooter, footer)

const selectSubFilter = document.getElementById("select-subFilter");
const selectFilter = document.getElementById("select-filter");
selectSubFilter.innerHTML = renderFilter(selectFilter.value)

selectFilter.addEventListener('change', function (event) {
  selectSubFilter.innerHTML = renderFilter(event.target.value)
  ordenarEfiltrar()
});

selectSubFilter.addEventListener('change', function () {
  ordenarEfiltrar()
});

const selectSort = document.getElementById("select-sort");
const selectOrder = document.getElementById("select-order");
selectSort.addEventListener('change', function () {
  ordenarEfiltrar()
});

selectOrder.addEventListener('change', function () {
  ordenarEfiltrar()
});

//Calcula a media de vida no span sobre elas
const mediaVida = document.querySelector(".mediaVida");
//calcula a media altura no span sobre elas
const mediaAltura = document.querySelector(".mediaAltura");
document.addEventListener("DOMContentLoaded", function () {

  mediaVida.innerHTML = calculaMediaVida(data);
  mediaAltura.innerHTML = calculaMediaAltura(data);
});

const button = document.querySelector("#button-clear");
button.addEventListener('click', function () {
  selectSort.value = "name"
  selectOrder.value = "asc"
  selectSubFilter.value = "facil"
  selectFilter.value = "facilidadeCriacao"

  ordenarEfiltrar()
});

function ordenarEfiltrar() {
  const meuDataSetFiltrado = filterBy(data, selectSubFilter.value);
  const meuDataSetOrdenado = sortBy(meuDataSetFiltrado, selectSort.value, selectOrder.value);

  root.innerHTML = renderItems(meuDataSetOrdenado);

  mediaAltura.innerHTML = calculaMediaAltura(meuDataSetOrdenado);
  mediaVida.innerHTML = calculaMediaVida(meuDataSetOrdenado);
}
