/*try{
  //ececutado quando não ha erros
}catch(){
  //executado quando ha erros
}finally{
  //executado sempre
}*/
/*
try{
  console.log('try - etapa1')
  try{
    console.log(a)
  }catch(e){
    console.log('try/catch - etapa1')
  }
}catch(e){
  console.log('catch - etapa2')
}finally{
  console.log('finally - etapa3')
}*/

function retornaHora(data){
  if(data && !(data instanceof Date)){
    throw new TypeError('Esperando instância de Date.')
  }
  if(!data){
    data = new Date()
  }
  return data.toLocaleTimeString('pt-BR',{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try{
  const data = new Date('01-01-1970 20:13:16')
  const hora = retornaHora()
  console.log(hora)
}catch(err){
  console.log('tratar erro')
}finally{
  console.log('finalização concluida')
}
