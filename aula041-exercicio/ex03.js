//Escreva uma função que recebe um número e retorna o seguinte:
//número é divisível por 3: retorna Fizz
//número é divisível por 5: retorna Buzz
//número é divisível por 3 e 5: retorna FizzBuzz
//número não é divisível 

let n = 14

function analise(n){
  if(isNaN(n)){
    console.log(n)
    return
  }
  
  let fizz = n % 3 === 0
  let buzz = n % 5 === 0

  if(fizz && buzz){
    console.log('FizzBuzz')
  }else if(fizz){
    console.log('Fizz')
  }else if(buzz){
    console.log('Buzz')
  }else{
    console.log('número não é divisível ')
  }
}

analise(n)
