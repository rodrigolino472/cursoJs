/*
node list, é criado quando usamos um queryselectall, muito parecido com uma lista
podemos usar por exemplo:
paragrafos[0]
paragrafos.length
*/

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[0])

for(p of paragrafos){
  //console.log(p)
}
console.log(paragrafos.length)

//vamos pegar a cor de fundo computada pelo navegador:
const estilosBody = getComputedStyle(document.body);
const corBody = estilosBody.backgroundColor;

for(p of paragrafos){
  p.style.backgroundColor = corBody;
  p.style.color = 'white';
}