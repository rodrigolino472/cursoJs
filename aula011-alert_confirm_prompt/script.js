/*
  quando usamos o alert, estamos chamando na verdade o objeto window, logo temos: window.alert()
  a mesma coisa acontece com o confirm e console.log: window.console.log()

  obs. o objeto window é o objeto principa do navegador.
*/

alert('testando o alert')
confirm('testando o confirm')
window.console.log('...')//no navegador, o window já é implicito

let n = Number(prompt('adicione um número'))