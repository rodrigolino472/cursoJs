function enviar(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  let pessoas = [];
  /*
  form.onsubmit = function(event){
    event.preventDefault()
    alert('previnido')
  }
  *//*
  let cont = 1
  function eventoDeEnvio(event){
    event.preventDefault()
    alert(`Form não foi enviado (${cont})`)
    cont++
  }*/
  function eventoDeEnvio(event){
    event.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })
    resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`
    console.log(pessoas)
  };
  form.addEventListener('submit', eventoDeEnvio);
}
enviar()