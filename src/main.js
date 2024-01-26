import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
import { sortBy, filterBy } from './dataFunctions.js';


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
  const filtroSelecionado = document.getElementById("select__subFilter").value;
  const ordenacaoSelecionada = document.getElementById("select__ordering").value;
  const ordernacaoAscDesc = document.querySelector('input[name="ordering"]:checked').value;

  const meuDataSetFiltrado = filterBy(data, filtroSelecionado);
  const meuDataSetOrdenado = sortBy(meuDataSetFiltrado, ordenacaoSelecionada, ordernacaoAscDesc);
  root.innerHTML = renderItems(meuDataSetOrdenado);
});
