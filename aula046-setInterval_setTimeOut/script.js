let pegarData = function(){
  return new Date()
}
let timer = setInterval(() => {
  let horaAtual = pegarData()
  console.log(horaAtual.toLocaleTimeString())
}, 1000)
setTimeout(() => {
  clearInterval(timer)
}, 10000)
