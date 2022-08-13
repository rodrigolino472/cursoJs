//try catch é um bloco de erro que funciona parecido com um if:

try{
  console.log(mensagem())
}catch(err){
  console.log('deu erro')
  console.log(err)
}

//Podemos usar também da seguinte forma:
function somar(x, y){
  if(typeof x !== 'number' ||
     typeof y !== 'number' ){
    throw new Error('x e y precisam ser números')
  }
  return x + y;
}

try{
  console.log(somar())
}catch(err){
  console.log(err)
}


