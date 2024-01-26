export const sortBy = (data, itemSelecionado, order) => {
  data.sort((a,b) => {
    if(itemSelecionado === "altura"){
      return a.facts.altura - b.facts.altura;
    }else if(itemSelecionado === "preco"){
      return a.facts.preco - b.facts.preco;
    }else if(itemSelecionado === "name"){
      return a.name.localeCompare(b.name);
    }else {
      return a.facts.capturaPresas.localeCompare(b.facts.capturaPresas);
    }
  })
  if(order === "desc"){
    data.reverse()
    return data
  }
  return data;
};


export default sortBy
