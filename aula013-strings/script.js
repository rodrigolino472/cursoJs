/*strings no javascript são indexadas ou seja:*/
let texto = 'um teste'
let travaLingua = 'O rato roeu a roupa do rei de roma.'

console.log(texto.charAt(1))                //busca por índice
console.log(texto.concat(' strings no js')) //concatena
console.log(texto.indexOf('teste'))         //onde inicia a palavra informada
console.log(texto.indexOf('teste', 3))      //onde inicia a palavra a partir do índice 3
console.log(texto.lastIndexOf('m', 2))      //procura o caractere informado de tras para frente
console.log(texto.match(/[a-z]/g))          //expressão regular
console.log(texto.match(/[a-z]/))           //expressão regular sem o g
console.log(texto.search(/t/))              //procura e retorna o primeiro indice do elemento informado
console.log(texto.replace('um', 'outro'))   //troca um elemento ou palavra
console.log(travaLingua.replace(/r/g, '#')) //troca todos os elementos informados
console.log(travaLingua.length)             //verifica o tamanho da string
console.log(travaLingua.slice(2, 6))        //fatia a string
console.log(travaLingua.split(' ', 3))      //separa as palavras pelo parâmetro informado, no caso o espaço ' ', posso adicionar ou não uma quantidade como 3
console.log(travaLingua.toLocaleLowerCase())//deixa todos os caracteres minusculos
console.log(travaLingua.toLocaleUpperCase())//deixa todos os caracteres maisúsculos

console.log(travaLingua.substring(travaLingua.length -5, travaLingua.length - 1))

