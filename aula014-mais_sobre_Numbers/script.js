//Number: O padrão para casas decimais utilizado pelo js é IEEE 754-2008
let n1 = 10
let n2 = 2.5
let n3 = 3.555555555555

console.log(n1 + n2)               //soma normalmente os números
console.log(n1.toString() + n2)    //converte n1 em string e concatena com o segundo
console.log(n1.toString(2))        //converte em binário
console.log(n3.toFixed(2))         //limita a quantidade de casas decimais 
console.log(Number.isInteger(n2))  //retorna true or false se o número for inteiro
console.log(Number.isNaN(n3))      //retorna true or false se não for um número

//ao realizar contas com númros decimais temos uma certa imprecisão, podemos fazer o seguinte

console.log(Number(n3.toFixed(2))) //o resultado será 3.56


console.log(typeof(n1.toString(2)))