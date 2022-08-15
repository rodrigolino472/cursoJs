let painel = document.querySelector('.relogio')
let seconds = 0
let timer;

const momento = (seconds) => {
  let tempoCorrido = new Date(seconds * 1000)
  return tempoCorrido.toLocaleTimeString('pt-BR', {timeZone: 'GMT'})
}
const contador = () => {
  timer = setInterval(() => {
    seconds++
    painel.innerHTML = momento(seconds)
  }, 1000);
}
document.addEventListener('click', (e) => {
  let element = e.target
  if(element.classList.contains('iniciar')){
    clearInterval(timer)
    contador()
    painel.classList.remove('pausado')
  }else if(element.classList.contains('pausar')){
    clearInterval(timer)
    painel.classList.add('pausado')
  }else if(element.classList.contains('zerar')){
    clearInterval(timer)
    seconds = 0
    painel.innerHTML = momento(seconds)
    painel.classList.remove('pausado')
  }
})