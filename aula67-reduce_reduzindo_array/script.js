//utilizado pra reduzir um array a um unico elemento
//recebe 4 parametros ao inves de 3: (acumulador, valor, indice, array)


//retorne a soma dos numeros:

const numeros = [1, 2, 3, 11, 20, 5, 7, 50, 100, 29, 67, 9]

const total = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, 0)//valor inicial do acumulador

console.log(total)

//retorne um array com os pares
const pares = numeros.reduce((acumulador, valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(pares)
