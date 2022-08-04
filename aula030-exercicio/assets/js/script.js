let h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();

function diaDaSemana(dia){
  let diaDasemana;
  switch(dia){
    case 0:
      diaDasemana = 'Domingo'
      return diaDasemana;
    case 1:
      diaDasemana = 'Segunda-Feira';
      return diaDasemana;
    case 2:
      diaDasemana = 'Terça-Feira';
      return diaDasemana;
    case 3:
      diaDasemana = 'Quarta-Feira';
      return diaDasemana;
    case 4:
      diaDasemana = 'Quinta-Feira';
      return diaDasemana;
    case 5:
      diaDasemana = 'Sexta-Feira';
      return diaDasemana;
    case 6:
      diaDasemana = 'Sábado';
      return diaDasemana;
    default:
      diaDaSemana = 'Erro';
      return 'Erro';
  };
};
function mes(mes){
  let nomeMes;
  switch(mes){
    case 0:
      nomeMes = 'Janeiro';
      return nomeMes;
    case 1:
      nomeMes = 'Fevereiro';
      return nomeMes;
    case 2:
      nomeMes = 'Março';
      return nomeMes;
    case 3:
      nomeMes = 'Abril';
      return nomeMes;
    case 4:
      nomeMes = 'Maio';
      return nomeMes;
    case 5:
      nomeMes = 'Junho';
      return nomeMes;
    case 6:
      nomeMes = 'Julho';
      return nomeMes;
    case 7:
      nomeMes = 'Agosto';
      return nomeMes;
    case 8:
      nomeMes = 'Setembro';
      return nomeMes;
    case 9:
      nomeMes = 'Outubro';
      return nomeMes;
    case 10:
      nomeMes = 'Novembro';
      return nomeMes;
    case 11:
      nomeMes = 'Dezembro';
      return nomeMes;
    default:
      return 'Mês inválido!';
  }
};

h1.innerHTML = diaDaSemana(data.getDay()) + ' ';
h1.innerHTML += mes(data.getMonth());