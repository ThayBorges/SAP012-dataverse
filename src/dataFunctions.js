export const sortBy = (data, itemSelecionado, order) => {
  data.sort((a,b) => {
    if(itemSelecionado === "altura"){
      return a.facts.altura > b.facts.altura;
    }else if(itemSelecionado === "preco"){
      return a.facts.preco > b.facts.preco;
    }else if(itemSelecionado === "facilidadeCriacao"){
      return a.facts.facilidadeCriacao > b.facts.facilidadeCriacao;
    }else {
      return a.facts.capturaPresas > b.facts.capturaPresas;
    }
  })
  console.log(data)
  if(order === "desc"){
    data.reverse()
    console.log(data)
    return data
  }
  return data;
};


export default sortBy
