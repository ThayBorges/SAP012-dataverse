import { renderItems, renderFilter } from './view.js';
import data from './data/dataset.js';
//import sortBy from './dataFunctions.js';
import { filterByEaseOfCreation } from './dataFunctions.js';
import { filterByTimeOfLife } from './dataFunctions.js';

const root = document.querySelector("#root")
root.innerHTML = renderItems(data);

const selectSubFilter = document.querySelector("#select__subFilter");

const selectFilter = document.querySelector("#select__filter");
selectSubFilter.innerHTML = renderFilter(selectFilter.value)
selectFilter.addEventListener('change', function () {
  selectSubFilter.innerHTML = renderFilter(selectFilter.value)
});

const button = document.querySelector("#botao-buscar");
button.addEventListener('click', function () {
  // const itemSelecionado = document.getElementById("select__ordering").value
  //const ordernacao = document.querySelector('input[name="ordering"]:checked').value;

  //const meuDataSetOrdenado = sortBy(data, itemSelecionado, ordernacao)
  //root.innerHTML = renderItems(meuDataSetOrdenado);
  const selectedSubFilterValue = selectSubFilter.value;
  if (selectedSubFilterValue === "2" || selectedSubFilterValue === "3" || selectedSubFilterValue === "5" || selectedSubFilterValue === "10") {
    const filteredList = filterByTimeOfLife(data, selectedSubFilterValue);
    return root.innerHTML = renderItems(filteredList);

  } else if (selectedSubFilterValue === "Fácil" || selectedSubFilterValue === "Moderado" || selectedSubFilterValue === "Difícil") {
    const filteredList = filterByEaseOfCreation(data, selectedSubFilterValue);
    return root.innerHTML = renderItems(filteredList);
  }
});
