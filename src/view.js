export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let blocoItems = ""

  for (let i = 0; i < data.length; i++) {

    blocoItems +=  `
        <li>
            <h2>${data[i].name}<h2>
            <img src="${data[i].imageUrl}" class="plant__img">
            <h4>${data[i].description}</h4>
        </li>
  `
  }
  return "<ul>" + blocoItems + "</ul>";

};
