export const renderItems = (data) => {

  let blocoItems = ""
  data.forEach(item => {
    blocoItems += `
        <li itemscope itemtype="plant__item" class="plant__item">
          <div class="plant__content">
            <img src="${item.imageUrl}" class="plant__img">
            <p><strong>${item.name}</strong></p>
            <p class="plant__description">${item.shortDescription}</p>
            <p>Altura em cm: ${item.facts.alturaPlanta}</p>
            <p>Preço: R$ ${item.facts.precoPlanta.toFixed(2)}</p>
            <p>Tempo de vida em anos: ${item.facts.tempoDeVida}</p>
            <p>Facilidade de Criação: ${item.facts.facilidadeCriacao}</p>
            <p>Tipo de captura das presas: ${item.facts.capturaPresas}</p>
          </div>
        </li>
  `
  });
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
  }else if (filter === "capturaPresas"){
    blocoFilter =`
    <option value="Ativa">Ativa</option>
    <option value="Semiativa">Semiativa</option>
    <option value="Passiva">Passiva</option>
    `
  }else {
    blocoFilter = `
    <option value="Fácil">Fácil</option>
    <option value="Moderado">Moderado</option>
    <option value="Díficil">Díficil</option>
    `
  }
  return blocoFilter
};


// $ é interpolação
// variáveis precisam ser inseridas com um sifrão ($) e entre chaves ({nome})
// string entre crases (`)
//Para adicionar a segunda imagem <img src="${data[i].imageUrl2}" class="plant__img"> /   <li>${data[i].shortDescription}</li>
