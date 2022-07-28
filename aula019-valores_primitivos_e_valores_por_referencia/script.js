//Primitivos(Imutáveis) - primitivos, number, boolean, undefined, null, bigint, symbol
let nome = 'luiz' //nesse caso é criadop uma cópia do valor da variável
nome = 25

//Referência(Mutável) - array, object, function
let arrA = [1, 2, 3]
let arrB = arrA //Ou seja, alterando A, B também será alterado pois apontam para o mesmo lugar

//ex:
arrA.push(4)
console.log(arrB) //mesmo alterando o valor de arrA, arrB também será alterado

//Uma das formas de criar uma cópia ao invés de referenciar:
arrC = [...arrA]
arrC.push(5)
console.log(arrC)
console.log(arrA)//Perceba que arrA continua inalterado

//Podemos fazer o mesmo com objetos:
let a = {nome, idade}
let b = {...a}
console.log(b)