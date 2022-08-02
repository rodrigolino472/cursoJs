function saudacao(nome){
  console.log(`Olah ${nome}`)
}

const func = saudacao('Rodrigo')
console.log(func)  //por não termos um return nessa função, teremos um valor undefined retornado

//podemos fazer assim:
function saudacao2(nome){
  return `Olah ${nome}`
}

console.log(saudacao2('Adam'))

//Posso definir um valor padrão para os parâmetros da função:
function somar(n1 = 1, n2 = 1){
  return n1 + n2;
}

console.log(somar(2))

//função anônima:
let anonima = function(n){
  return n ** .5
}

console.log(anonima(25))

//arrow function
let pot = n => n ** 2

console.log(pot(5))

let arr = []
console.log(arr === null)