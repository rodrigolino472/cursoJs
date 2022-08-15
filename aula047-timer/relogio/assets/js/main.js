const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function contadorDeSegundos(segundos){
  const tempo = new Date(segundos * 1000)
  return tempo.toLocaleTimeString('pt-BR', {
    timeZone: 'UTC'
  })
}
function start(){
  timer = setInterval(() => {
    segundos++
    relogio.innerHTML = contadorDeSegundos(segundos)
  }, 1000)
}
pausar.addEventListener('click', () => {
  clearInterval(timer);
})
zerar.addEventListener('click', () => {
  relogio.innerHTML = '00:00:00';
  segundos = 0;
  clearInterval(timer)
})

iniciar.addEventListener('click', () => {
  relogio.classList.remove('pausado')
  clearInterval(timer)
  start()
})
