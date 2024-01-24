export const renderItems = (data) => {

  let blocoItems = ""

  for (let i = 0; i < data.length; i++) {

    blocoItems += `
        <li itemscope itemtype="plant__item" class="plant__item">
          <div class="plant__content">
            <img src="${data[i].imageUrl}" class="plant__img">
            <p><strong>${data[i].name}</strong></p>
            <p class="plant__description">${data[i].shortDescription}</p>
            <p>Altura em cm: ${data[i].facts.alturaPlanta}</p>
            <p>Preço: R$ ${data[i].facts.precoPlanta.toFixed(2)}</p>
            <p>Tempo de vida em anos: ${data[i].facts.tempoDeVida}</p>
            <p>Facilidade de Criação: ${data[i].facts.facilidadeCriacao}</p>
            <p>Tipo de captura das presas: ${data[i].facts.capturaPresas}</p>
          </div>
        </li>
  `
  }
  return `<ul id="plant__list">${blocoItems}</ul>`;
};

export const renderFilter = (filter) => {

  let blocoFilter = ""

  if (filter === "tempoDeVida") {
    blocoFilter = `
    <option value="2">2 anos</option>
    <option value="3">3 anos</option>
    <option value="5">5 anos</option>
    <option value="10">10 anos</option>
    `
  }else {
    blocoFilter = `
    <option value="fácil">Fácil</option>
    <option value="moderado">Moderado</option>
    <option value="difícil">Difícil</option>
    `
  }
  return blocoFilter
};







// function buildFilterList(data, filterBy){
//   //new estou criando e set pra não repetir o item da lista
//   //eslint-disable-next-line no-undef
//   const listFilter = new Set();

//   data.forEach(plant => {
//     if("facilidadeCriacao" === filterBy) {
//       listFilter.add(plant.facilidadeCriacao)
//     }else if("capturaPresas" === filterBy) {
//       listFilter.add(plant.capturaPresas)
//     }else {
//       listFilter.add(plant.tempoDeVida)
//     }
//   });
//   return listFilter;
// }
// $ é interpolação
// variáveis precisam ser inseridas com um sifrão ($) e entre chaves ({nome})
// string entre crases (`)
//Para adicionar a segunda imagem <img src="${data[i].imageUrl2}" class="plant__img"> /   <li>${data[i].shortDescription}</li>
