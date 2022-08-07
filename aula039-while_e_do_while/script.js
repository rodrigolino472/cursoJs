let i = 0;
let nome = 'AdamCarter'

while(i <= 10){
  console.log(i)
  i++
}
i = 0
while(i < nome.length){
  console.log(nome[i])
  i++
}
//exemplo com funções

let min = 1;
let max = 50;
let aleatorio;
let percurso = []

function rand(min, max){
  aleatorio = Math.random() * (max - min) + min;
  return Math.floor(aleatorio)
}
while(aleatorio !== 10){
  aleatorio = rand(min, max)
  console.log(aleatorio)
  percurso.push(aleatorio)
}
console.log(`Tentativas: ${percurso.length}`)

do{
  console.log('executa pelo menos uma vez')
}while(aleatorio !== 10)