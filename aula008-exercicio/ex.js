/*
Rodrigo Lino Gonçalves tem 25 anos, pesa 100kg
tem 1.7 de altura e seu IMC é de ...
Rodrigo Lino nasceu em 1996
*/

const nome = 'Rodrigo'
const sobrenome = 'Lino Gonçalves'
const idade = 25
const peso = 100
const altura = 1.7
let imc = peso / (altura * altura)
let anoNasc = 2022 - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos,' + ' pesa ' + peso + 'kg ')
console.log('tem ' + altura + ' de altura ' + ' e seu IMC é de: ' + imc)
console.log(nome + ' ' + sobrenome + 'nasceu em ' + anoNasc)
