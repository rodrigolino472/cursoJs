//Enquanto no for in pegamos o indice, no for of pegamos o elemento em si
const nome = 'Adam Carter'
const nomes = ['adam', 'rodrigo', 'nivia']
for(i of nome){
  console.log(i)
}

//todo array tem o método forEach
nomes.forEach(function(elemento, indice, array) {
  console.log(elemento, indice, array)
});

//obs. Objetos não são iteraveis, ou seja, só podemos usar o for in, e não o for of