//break e continue funcionam em qualquer ciclo de repetição

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i of numeros){
  if(i === 2){//nesse caso a condição sera quebrada no 2 e voltamos ao for
    console.log('pulei o numero 2')
    continue
  }
  console.log(i)
  if(i === 7){
    console.log('7 encontrado saindo...')
    break//O break quebra todo o ciclo
  }
}