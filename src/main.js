import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
import { sortBy, filterBy, calculaMediaVida, calculaMediaAltura } from './dataFunctions.js';


const root = document.getElementById("root");
const plants = document.createElement("ul");
plants.setAttribute("class", "plant__list");
root.appendChild(plants)
plants.innerHTML = renderItems(data);

const selectSubFilter = document.getElementById("select__subFilter");
const selectFilter = document.getElementById("select__filter");
selectSubFilter.innerHTML = renderFilter(selectFilter.value)
selectFilter.addEventListener('change', function () {
  selectSubFilter.innerHTML = renderFilter(selectFilter.value)
});

//Calcula a media de vida no span sobre elas
const mediaVida = document.querySelector(".mediaVida");
mediaVida.innerHTML = calculaMediaVida(data);

//calcula a media altura no span sobre elas
const mediaAltura = document.querySelector(".mediaAltura");
mediaAltura.innerHTML = calculaMediaAltura(data);

const button = document.querySelector("#botao-buscar");
button.addEventListener('click', function () {
  const filtroSelecionado = document.querySelector("#select__subFilter").value;
  const ordenacaoSelecionada = document.querySelector("#select__ordering").value;
  const ordernacaoAscDesc = document.querySelector('input[name="ordering"]:checked').value;

  const meuDataSetFiltrado = filterBy(data, filtroSelecionado);
  const meuDataSetOrdenado = sortBy(meuDataSetFiltrado, ordenacaoSelecionada, ordernacaoAscDesc);
  root.innerHTML = renderItems(meuDataSetOrdenado);

  //recalcula as medias de acordo com os filtros
  mediaAltura.innerHTML = calculaMediaAltura(meuDataSetOrdenado);
  mediaVida.innerHTML = calculaMediaVida(meuDataSetOrdenado);
});
