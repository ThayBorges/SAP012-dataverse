export const filterBy = (data, filterValue) => {
  // Certifique-se de que filterValue é uma string, pois os valores dos options são strings
  const filterString = filterValue;

  // Filtra os dados com base no valor selecionado
  const filteredData = data.filter(item => {

    return item.facts.tempoDeVida === parseInt(filterString)  || item.facts.facilidadeCriacao === filterString || item.facts.capturaPresas === filterString;
  });

  return filteredData;
};

export const sortBy = (data, itemSelecionado, order) => {
  data.sort((a, b) => {
    if (itemSelecionado === "altura" || itemSelecionado === "preco") {
      // Se o item selecionado for altura ou preço, compare numericamente
      return a.facts[itemSelecionado] - b.facts[itemSelecionado];
    } else if (itemSelecionado === "name") {
      // Se o item selecionado for nome ou captura de presas, compare como strings
      return a[itemSelecionado].localeCompare(b[itemSelecionado]);
    } else {
      // Adicione uma lógica de classificação padrão aqui, caso nenhum critério seja correspondido.
      return 0;
    }
  });

  if (order === "desc") {
    data.reverse();
  }

  return data;
};


export default sortBy
