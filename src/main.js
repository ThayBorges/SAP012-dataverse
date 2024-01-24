import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
import sortBy from './dataFunctions.js';

const root = document.getElementById("root")
root.innerHTML = renderItems(data);

const selectSubFilter = document.getElementById("select__subFilter");
const selectFilter = document.getElementById("select__filter");
selectSubFilter.innerHTML = renderFilter(selectFilter.value)
selectFilter.addEventListener('change', function () {
  selectSubFilter.innerHTML = renderFilter(selectFilter.value)
});

const button = document.getElementById("botao-buscar");
button.addEventListener('click', function () {
  const itemSelecionado = document.getElementById("select__ordering").value
  const ordernacao = document.querySelector('input[name="ordering"]:checked').value;

  const meuDataSetOrdenado = sortBy(data, itemSelecionado, ordernacao)
  root.innerHTML = renderItems(meuDataSetOrdenado);
});
