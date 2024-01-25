const sortBy = (data, itemSelecionado, order) => {
  data.sort((a, b) => {
    if (itemSelecionado === "altura") {
      return a.facts.altura > b.facts.altura;
    } else if (itemSelecionado === "preco") {
      return a.facts.preco > b.facts.preco;
    } else if (itemSelecionado === "facilidadeCriacao") {
      return a.facts.facilidadeCriacao > b.facts.facilidadeCriacao;
    } else {
      return a.facts.capturaPresas > b.facts.capturaPresas;
    }
  })
  console.log(data)
  if (order === "desc") {
    data.reverse()
    console.log(data)
    return data
  }
  return data;
};

/*export const filterByEaseOfCreation = (data, value) => {
  return data.filter(item => item.facts.facilidadeCriacao === value); 
};

export const filterByTimeOfLife = (data, value) => {
  return data.filter(item => item.facts.tempoDeVida === value); 
};
*/

export const filterByEaseOfCreation = (data, value) => {
  return data.filter(item => item.facts.facilidadeCriacao === value);
};

export const filterByTimeOfLife = (data, value) => {
  // Converta o valor para número usando parseInt
  const numericValue = parseInt(value, 10);

  // Verifique se o valor convertido é um número válido
  if (!isNaN(numericValue)) {
    return data.filter(item => item.facts.tempoDeVida === numericValue);
  } else {
    // Se não for um número válido, retorne um array vazio
    return [];
  }
};

export default sortBy;

