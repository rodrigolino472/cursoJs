const frutas = ['maçã', 'uva', 'banana']
const pokemonPlanta = {
  poke1: 'bulbasaur',
  poke2: 'ivysaur',
  poke3: 'venussaur'
}
//dessa forma podemos ter acesso ao index do array:
for(let i in frutas){ 
  console.log(frutas[i])
}

//Podemos fazer a mesma coisa com objetos:
for(let i in pokemonPlanta){
  console.log(i, pokemonPlanta[i])
}
