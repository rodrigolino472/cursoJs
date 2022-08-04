const pokemonUsuario = 'charizard'
const pokemonEscolhido = pokemonUsuario ? `Eu escolho você ${pokemonUsuario}!` : `Nenhum pokemon...`;

const ataque = null;
const ataqueEscolhido = ataque || 'lança chamas'
console.log(pokemonEscolhido, ataqueEscolhido)