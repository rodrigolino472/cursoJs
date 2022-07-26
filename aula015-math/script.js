//Objeto math

let n1 = 5.25

console.log(Math.floor(n1))     //Arredonda a casa decimal para baixo
console.log(Math.ceil(n1))      //Arredonda a casa decimal para cima
console.log(Math.round(n1))     //Arredonda a casa decimal para o mais próximo
console.log(Math.max(1,2,5,-2)) //Mostra o maior número de uma sequência
console.log(Math.min(1,2,5,-2)) //Mostra o menor número de uma sequência
console.log(Math.random())      //Cria um número aleatório entre 0 e 1
console.log(Math.pow(n1, 5))    //Mostra uma potência, do primeiro pelo segundo
console.log(n1 ** .5)           //mostra a raiz quadrada do número
console.log(100 / 0.00000001)   //No javascript divisão por 0 == infinity

//exemplo de utilização: um número entre 5 e 10:
console.log(Math.round(Math.random() * (10 - 5) + 5))