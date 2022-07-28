//Objeto literal:
let pessoa = {
  nome: 'Rodrigo',
  idade: 25
}

console.log(pessoa.idade)

//Posso criar uma função que cria um objeto:
function criaPessoa(nome, idade){
  return {
    nome: nome,
    idade: idade
  }
}
let pessoa01 = criaPessoa('adam', 5)
console.log(pessoa01)

//Posso criar uma função como propriedade de um objeto:
function criaAluno(nome, idade){
  return {
    nome: nome,
    idade: idade,
    apresentacao: function(){
      return (`Olah! Meu nome é ${this.nome}, e tenho ${this.idade} anos de idade, muito prazer...`)
    }
  }
}
console.log(criaAluno('Rodrigo Lino', 25).apresentacao())