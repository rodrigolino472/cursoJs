//Escreva uma função que recebe um número e retorna o seguinte:
//número é divisível por 3: retorna Fizz
//número é divisível por 5: retorna Buzz
//número é divisível por 3 e 5: retorna FizzBuzz
//número não é divisível 
//Use a função com números entre 0 e 100

function fizzBuzz(n){
  if (typeof n !== 'number') return NaN;
  else if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
  else if(n % 3 === 0) return 'Fizz'
  else if(n % 5 === 0) return 'Buzz'
  return `não é divisível nem por 3 e nem por 5.`;
}

for(let i = 0; i <= 100; i++){
  console.log(i, fizzBuzz(i))
}
console.log(fizzBuzz(''))