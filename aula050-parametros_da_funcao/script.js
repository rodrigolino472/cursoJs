//Ao declarar uma função com a palavra function, eu tenho uma propriedade chamada arguments
function somarParam(){
  let total = 0;
  for(arg of arguments){
    total += arg
  }
  console.log(total)
}
somarParam(1, 3, 5, 7)

//Também posso enviar diferentes quantidades de parametros e definir um valor padrao para meus parametros:

function somar(x = 2, y = 3, z = 4){
  console.log(x + y + z)
}
somar(10, undefined, 1)//nesse caso undefined pula o argumento b


//Posso enviar objetos como parâmetro:
function objeto({nome, idade}){
  console.log(nome, idade)
}
objeto({nome: 'Adam', idade: 5})

//posso usar também o spread para criar uma lista:

function calc(operador, acumulador, ...numeros){
  if (operador === '+'){
    for(let n of numeros){
      acumulador += n
    }
  }
  console.log(acumulador)
}

calc('+', 0, 1, 3, 4, 5)