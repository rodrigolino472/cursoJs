const data = new Date();
let diaDaSemana = data.getDay();

switch(diaDaSemana){
  case 0:
    diaDaSemana = 'domingo'
    break;
  case 1:
    diaDaSemana = 'segunda-feira';
    break;
  case 2:
    diaDaSemana = 'terça-feira';
    break;
  case 3:
    diaDaSemana = 'quarta-feira';
    break;
  case 4:
    diaDaSemana = 'quinta-feira';
    break;
  case 5:
    diaDaSemana = 'sexta-feira';
    break;
  case 6:
    diaDaSemana = 'sábado';
    break;
  default:
    diaDaSemana = 'inválido'
}

console.log(data)
console.log(diaDaSemana);

//usando funções:

function diaSeguinte(diaDaSemana){
  let diaSeguinte;
  switch(diaDaSemana){
    case 'domingo':
      diaSeguinte = 'segunda-feira';
      return diaSeguinte;
    case 'segunda-feira':
      diaSeguinte = 'terça-feira';
      return diaSeguinte;
    case 'terça-feira':
      diaSeguinte = 'quarta-feira';
      return diaSeguinte;
    case 'quarta-feira':
      diaSeguinte = 'quinta-feira';
      return diaSeguinte;
    case 'quinta-feira':
      diaSeguinte = 'sexta-feira';
      return diaSeguinte;
    case 'sexta-feira':
      diaSeguinte = 'sábado';
      return diaSeguinte;
    case 'sábado':
      diaSeguinte = 'domingo';
      return diaSeguinte;
    default:
      diaSeguinte = 'erro'
      return diaSeguinte;
  };
};

console.log(diaSeguinte(diaDaSemana))