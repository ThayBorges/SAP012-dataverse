export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let blocoItems = ""

  for (let i = 0; i < data.length; i++) {

    blocoItems += `
        <li>
          <div class="plant__content">
            <img src="${data[i].imageUrl}" class="plant__img">
            <div>
              <h2>${data[i].name}<h2>
              <h4>${data[i].description}</h4>
            </div>
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
