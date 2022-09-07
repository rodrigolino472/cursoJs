//função construtora
//função fábrica
//construtora ->Pessoa (new)
//fábrica     ->criaPessoa

function Pokemon(nome, tipo){
  //método privado, não posso acessar de fora pelo objeto criado
  const id = 123456

  //método público, pode ser referenciado
  this.nome = nome,
  this.tipo = tipo
}

pokemon1 = new Pokemon('pikachu', 'eletrico')
pokemon2 = new Pokemon('charizard', 'fogo/voador')

console.log(pokemon1.nome, pokemon2.nome)

