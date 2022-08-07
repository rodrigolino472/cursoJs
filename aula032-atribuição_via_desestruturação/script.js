//assim podemos atribuir por desestruturação
let a = 'A'
let b = 'B'
let c = 'C'

const numeros = [b, c, a];
[a, b, c] = numeros;
console.log(a, b, c);

//... rest e ... spread
const equipe = ['gengar', 'arcanine', 'gyarados', 'jolteon', 'dragonite', 'venussaur'];
[primeiroPokemon, segundoPokemon, ...restante] = equipe;
[, fogo, agua, , , planta] = equipe;

console.log(primeiroPokemon, segundoPokemon);
console.log(restante);
console.log(fogo, agua, planta);

const equipes = [
  ['gengar', 'arcanine', 'gyarados', 'jolteon', 'dragonite', 'venussaur'],
  ['scizor', 'houdoom', 'crobat', 'ampharos', 'tyranitar', 'feraligatr']
]
let [,[,,venenoso]] = equipes
let [,[...segundaEquipe]] = equipes;
let todasAsEquipes = [...equipes];
console.log(segundaEquipe)
console.log(todasAsEquipes);