// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const sortBy = (data, value, order) => {
  data.sort(function ordenacao(a,b) {
    if(value === "altura"){
      return a.facts.altura > b.facts.altura;
    }else if(value === "preco"){
      return a.facts.preco > b.facts.preco;
    }else {
      return a.facts.facilidadeCriacao > b.facts.facilidadeCriacao;
    }
  })
  if(order === "desc"){
    return data.reverse()
  }
  return data;
};

<<<<<<< HEAD
//export const filterby = (data, value) => {
//  return [];
//};
=======
export const anotherExample = () => {
  return [];
};
>>>>>>> feature/dataset_js
