export const filterBy = (data, filterValue) => {

  const filterString = filterValue;
  const filteredData = data.filter(item => {

    return item.facts.tempoDeVida === parseInt(filterString) || item.facts.facilidadeCriacao === filterString || item.facts.capturaPresas === filterString;
  });

  return filteredData;
};

export const sortBy = (data, itemSelecionado, order) => {
  data.sort((a, b) => {
    if (itemSelecionado === "altura" || itemSelecionado === "preco") {

      return a.facts[itemSelecionado] - b.facts[itemSelecionado];
    } else if (itemSelecionado === "name") {

      return a[itemSelecionado].localeCompare(b[itemSelecionado]);
    } else {

      return 0;
    }
  });

  if (order === "desc") {
    data.reverse();
  }

  return data;
};

export default sortBy
