//função clássica, nessa função acontece o hoisting, a função é elevada de escopo e posso chamar ela mesmo antes de declarar

falarOi()//chamada antes de declarar
function falarOi(){
  console.log('oi')
}

//As funções no javascript são objetos de primeira classe, o que siginifica que elas podem ser tratadas como dados, na pratica podemos atribuir uma função a uma variável:

const souUmDado = function(){
  console.log('sou um dado')
}
souUmDado()//Nesse caso não posso chamar antes da declaração

const recebiFuncParam = function(param){
  param()
}
recebiFuncParam(souUmDado)

//arrow function
const arrow = () => {
  console.log('arrow function')
}
arrow()