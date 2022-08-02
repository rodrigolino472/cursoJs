//Podemos utilizar vários tipos de dados em um mesmo array

let arr = ['nome', 25, true, null]
console.log(arr)

/*No javascript os elementos do arrays são indexados assim como as strings, 
porém não por caractere e sim por elemento:*/

//                0         1        2
let alunos = ['rodrigo', 'adam', 'silvia']
console.log(alunos[1])

//Podemos alterar um índice do array:
alunos[0] = 'igor'
console.log(alunos)

//Uma das formas de adicionar um elemento no array:
alunos[alunos.length] = 'novo aluno'
console.log(alunos)

//forma correta de adicionar elementos no array:
alunos.push('nivia')
console.log(alunos)

//adiciona elemento no inicio do array e altera o indice dos demais 
alunos.unshift('daniela')
console.log(alunos)

//remove o último elemento da lista:
let removidoFinal = alunos.pop() //removemos o último elemento e adicionamos ele a uma variável
console.log(removidoFinal)

//remove o primeiro elemento da lista:
let removidoInicio = alunos.shift()//removemos o primeiro elemento da lista, também podemos adicionar a uma variável

//deletar elemento sem alterar o índice deles:
delete alunos[1] //nesse caso o item de posição[1] ficará com espaço vazio
console.log(alunos)

//podemos também fatiar o array assim como a string
console.log(alunos.slice(0, 2))

//no javascript o array é um objeto:
console.log(typeof(alunos))
console.log(alunos instanceof Array)