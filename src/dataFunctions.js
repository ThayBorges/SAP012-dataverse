export const sortBy = (data, itemSelecionado, order) => {
  const sortedData = data.slice(0);

  sortedData.sort((a, b) => {
    const getValue = (item) => {
      switch (itemSelecionado) {
      case "altura":
      case "preco":
        return a.facts[item] - b.facts[item];
      case "facilidadeCriacao":
      case "capturaPresas":
        return a.facts[item].localeCompare(b.facts[item]);
      default:
        return 0;
      }
    };

    return getValue(itemSelecionado);
  });

  if (order === "desc") {
    return sortedData.reverse();
  }

  return sortedData;
};

export default sortBy

// export const sortBy = (data, itemSelecionado, order) => {
//   data.sort((a,b) => {
//     if(itemSelecionado === "altura"){
//       return a.facts.altura - b.facts.altura;
//     }else if(itemSelecionado === "preco"){
//       return a.facts.preco - b.facts.preco;
//     }else if(itemSelecionado === "facilidadeCriacao"){
//       return a.facts.facilidadeCriacao.localeCompare(b.facts.facilidadeCriacao);
//     }else {
//       return a.facts.capturaPresas.localeCompare(b.facts.capturaPresas);
//     }
//   })
//   if(order === "desc"){
//     data.reverse()
//     return data
//   }
//   return data;
// };


// export default sortBy
