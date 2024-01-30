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

const selectSubFilter = document.getElementById("select__subFilter");
const selectFilter = document.getElementById("select-filter");
selectSubFilter.innerHTML = renderFilter(selectFilter.value)
selectFilter.addEventListener('change', function (event) {
  selectSubFilter.innerHTML = renderFilter(event.target.value)
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
  const filtroSelecionado = document.querySelector("#select__subFilter").value;
  const ordenacaoSelecionada = document.querySelector("#sort-order").value;
  const ordernacaoAscDesc = document.querySelector('input[name="order"]:checked').value;

  const meuDataSetFiltrado = filterBy(data, filtroSelecionado);
  const meuDataSetOrdenado = sortBy(meuDataSetFiltrado, ordenacaoSelecionada, ordernacaoAscDesc);
  root.innerHTML = renderItems(meuDataSetOrdenado);

  //recalcula as medias de acordo com os filtros
  mediaAltura.innerHTML = calculaMediaAltura(meuDataSetOrdenado);
  mediaVida.innerHTML = calculaMediaVida(meuDataSetOrdenado);

});

