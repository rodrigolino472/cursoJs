//filter, map, reduce
//como o nome sugere, filter filtra os valores dentro de um array

const numeros = [1, 2, 3, 11, 20, 5, 7, 50, 100, 29, 67, 9]

/*
function callBackFilter(valor, indice, array){ automaticamente o filter recebe esses 3 parametros, ele vai percorrer todos os elementos dentro do array e obrigatoriamente precisa retornar um valor booleano
    return valor > 10
}
*/

const maiorQueDez = numeros.filter(valor => valor > 10)//todos os valores true serão adicionados dentro desse array

console.log(maiorQueDez)