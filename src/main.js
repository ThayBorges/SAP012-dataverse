//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//const root = document.querySelector('[id= "root"]')
//root.innerHTML = renderItems(data);

const plantList = document.getElementById('plant__list')
plantList.innerHTML = renderItems(data);

const selectTipo = document.getElementById("tipo")
const selectNome = document.getElementById("name")
const button = document.getElementById("botao-limpar");
button.addEventListener('click', function () {
  selectTipo.value = "default"
  selectNome.value = "default"
});

