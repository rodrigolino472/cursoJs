const form = document.querySelector('form')
const limpar = document.querySelector('.limpar')
let enderecos = document.querySelector('.enderecos')
let endereco = document.querySelectorAll('input')
function enviar(event){
  event.preventDefault();
  
  for(item of endereco){
    if(!item.value){
      enderecos.innerHTML += `<p>Erro, todos os campos precisam ser preenchidos</p>`
      return;
    }
  }
  enderecos.innerHTML += `<p>Estado: ${endereco[0].value}, Cidade: ${endereco[1].value}, Bairro: ${endereco[2].value}, Rua: ${endereco[3].value}.</p>`
  clear(event)
}

function clear(event){
  event.preventDefault()
  for(item of endereco){
    item.value = ''
  }
}
form.addEventListener('submit', enviar)
limpar.addEventListener('click', clear)