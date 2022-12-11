//splice
//O método splice substitui os metodos: pop, shift, unshift e push

const equipe = ['charizard', 'blastoise', 'venussaur', 'pidgeot', 'pikachu', 'rhydon']

const eliminados = equipe.splice(4, 1)//o splice retorna um array, 4 referente ao indice, e 1 referente a quantidade de elementos removidos do indice
console.log(equipe, eliminados)//caso queira remover ate o final do array, posso passar o parametro Number.MAX_VALUE no lugar do 1



//posso substituir um elemento do indice:
const novaEquipe = ['arcanine', 'nidoqueen', 'gyarados', 'jolteon', 'gengar', 'dragonite']
const novaEliminacao = novaEquipe.splice(3, 0)//posso remover 0 elementos e criar um array vazio no indice informado
console.log(novaEquipe, novaEliminacao)

const substituicao = novaEquipe.splice(3, 2, 'ampharos', 'jhynx', ['arcanine', 'nidoqueen', 'gyarados', 'jolteon', 'gengar', 'dragonite'])
console.log(novaEquipe, substituicao)

//simular pop: novaEquipe.splice(novaEquipe.lenght, 0, 'garchomp')

novaEquipe.splice(novaEquipe.lenght, 0, 'garchomp')//garchomp adicionado no ultimo indice, ou seja um array dentro de outro
console.log(novaEquipe)
