//Sobre arrays:
//sabemos que é indexado

const firstGroup = ['charizard', 'blastoise', 'venussaur']
console.log(`primeiro time: ${firstGroup}`)
delete firstGroup[1]//deletamos o item sem alterar o indice dos demais
console.log(firstGroup)

//-=-=-=--=--=-=-=-=--=-=-=-=-=-=-=--=--==--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const secondGroup = new Array('arcanine', 'gyarados', 'victrebel')//forma pouco utilizada mas funciona da mesma forma do anterior
console.log(`segundo grupo:  ${secondGroup}`)

//-=-=-=--=--=-=-=-=--=-=-=-=-=-=-=--=--==--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const thirdGroup = ['houdoom', 'feraligthr', 'belossoom']
console.log(`terceiro grupo: ${thirdGroup}`)

const newThirdGroup = thirdGroup //atribuimos a esse array o array anterior, é uma variavel de referencia
newThirdGroup.pop()
console.log(thirdGroup)

//-=-=-=--=--=-=-=-=--=-=-=-=-=-=-=--=--==--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const fourthGroup = ['blaziken', 'milotic', 'breloom']
const removido = fourthGroup.pop()//remove o ultimo indice
const removido1 = fourthGroup.shift()//remove o primeiro indice e desloca os demais
const add = fourthGroup.push('flygon')//adiciona elemento no final do array
const add1 = fourthGroup.unshift('metagross')//adiciona elemento no inicio do array
const fatiar = fourthGroup.slice(1, -1) //fatia a string, o ultimo indice não é incluso
console.log('quarto grupo', fourthGroup, fatiar)

//-=-=-=--=--=-=-=-=--=-=-=-=-=-=-=--=--==--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const nomes = 'gengar jhinx alakazam'
const fifthGroup = nomes.split(' ')//O split serve para transformar uma string em um array com base no separador informado
console.log(fifthGroup)
console.log(fifthGroup.join(' '))//O join serve para unir um array em forma de string, informamos também um separador