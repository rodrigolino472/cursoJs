//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a 

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const nomesAcima = pessoas.filter(valor => valor.nome.length >= 5)
const idosos = pessoas.filter(valor => valor.idade > 50)
const finalA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(nomesAcima)
console.log(idosos)
console.log(finalA)