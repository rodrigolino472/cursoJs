/*
FALSY
*false
0
'' "" ``
null / undefined
NaN
OBS. qualquer valor diferente dos valores acima representam true
*/
console.log(true && true && 'verdadeiro');//Nesse caso o console mostra o último valor verdadeiro

console.log('verdade' || false || true);//Nesse caso o primeiro valor verdadeiro será mostrado
