function* geradora1(){
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

const teste = geradora1();/*
console.log(teste, teste.next())
console.log(teste.next())
console.log(teste.next())
*/
for(item of teste){
  console.log(item)
}