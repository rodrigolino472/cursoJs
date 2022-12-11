//No filter, recebemos um array com o mesmo tamanho ou menor que o referenciado, no caso do map, recebemos sempre um array com o mesmo tamanho porém com a alteração de valores

//recebe os mesmos parametros que o filter, ex:
//retorne os valores em dobro:

const numeros = [1, 2, 3, 11, 20, 5, 7, 50, 100, 29, 67, 9]
const dobro = numeros.map(valor => valor * 2)

console.log(dobro)