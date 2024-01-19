export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let blocoItems = ""

  for (let i = 0; i < data.length; i++) {

    blocoItems += `
        <li>
          <div class="plant__content">
            <img src="${data[i].imageUrl}" class="plant__img">
            <ul class="facts">
              <li>${data[i].name}</li>
              <li>${data[i].shortDescription}</li>
              <li>${data[i].description}</li>
              <li>Altura: ${data[i].facts.altura}</li>
              <li>Preço: R\$ ${data[i].facts.preco.toFixed(2)}</li>
              <li>Facilidade de Criação: ${data[i].facts.facilidadeCriacao}</li>
            </ul>
          </div>
        </li>
  `
  }
  return blocoItems;

};

// $ é interpolação
// variáveis precisam ser inseridas com um sifrão ($) e entre chaves ({nome})
// string entre crases (`)
//Para adicionar a segunda imagem <img src="${data[i].imageUrl2}" class="plant__img">
