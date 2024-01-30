export const renderItems = (data) => {
  const data2 = data.map((item) => {
    return {
      name: item.name,
      imageUrl: item.imageUrl,
      shortDescription: item.shortDescription,
      alturaPlanta: item.facts.alturaPlanta,
      precoPlanta: item.facts.precoPlanta,
      tempoDeVida: item.facts.tempoDeVida,
      facilidadeCriacao: item.facts.facilidadeCriacao,
      capturaPresas: item.facts.capturaPresas
    }
  })
  let blocoItems = ""
  data2.forEach(item => {
    blocoItems += `
        <li itemscope itemtype="plant__item" class="plant__item">
          <div class="plant__content">
            <img src="${item.imageUrl}" class="plant__img">
            <p><strong>${item.name}</strong></p>
            <p class="plant__description">${item.shortDescription}</p>
            <p>Altura em cm: ${item.alturaPlanta}</p>
            <p>Preço: R$ ${item.precoPlanta.toFixed(2)}</p>
            <p>Tempo de vida em anos: ${item.tempoDeVida}</p>
            <p>Facilidade de Criação: ${item.facilidadeCriacao}</p>
            <p>Tipo de captura das presas: ${item.capturaPresas}</p>
          </div>
        </li>
  `
  });
  return `<ul id="plant__list">${blocoItems} </ul>` ;
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
  } else if (filter === "capturaPresas") {
    blocoFilter = `
    <option value="Ativa">Ativa</option>
    <option value="Semiativa">Semiativa</option>
    <option value="Passiva">Passiva</option>
    `
  } else {
    blocoFilter = `
    <option value="Fácil">Fácil</option>
    <option value="Moderado">Moderado</option>
    <option value="Díficil">Díficil</option>
    `
  }
  return blocoFilter
};

