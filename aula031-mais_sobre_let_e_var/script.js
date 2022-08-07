//let tem o escopo de bloco, já o var tem escopo de função

var nome = 'rodrigo'
var nome = 'lino'
console.log(nome);//posso reatribuir e redeclarar o var

let nome2 = 'igor'
nome2 = 'lino'    //posso apenas reatribuir

function chamaNome(){
  nome2 = 'gonçalves';//caso não ache a variavel nome2 nesse escopo vai procurar no de cima
  console.log(nome2)
}
chamaNome()


console.log(nome3)//não teremos um erro embora a variavel esteja declarada abaixo, mas sim um undefined, isso porque o hoisting acontece, minha variável passa a ser jogada la em cima sem atribuição, apenas declarada.
var nome3 = 'lopes'