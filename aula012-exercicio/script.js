/*
Inverta o valor das variáveis:
a = b
b = c
c = a
*/
let a = 'a'
let b = 'b'
let c = 'c'

aux = a
a = b
b = c
c = aux
//[a, b, c] = [b, a, a]

console.log(a, b, c)