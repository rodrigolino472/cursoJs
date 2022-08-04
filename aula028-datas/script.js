//data no javascript é uma função construtora

const data1 = new Date(2022, 8);//a, m, d, h, min, seg, ms - esse é o formato number, menos usado
console.log(data1.toString());

const data2 = new Date('2022-12-02 20:25:32.100');//mais usado, formato string
console.log(data2.toString());

console.log(`Dia: ${data2.getDate()}`)          //pegamos o dia
console.log(`Mês: ${data2.getMonth()} + 1`)     //pegamos o mes(mes começa com 0)
console.log(`Ano: ${data2.getFullYear()}`)      //pegamos o ano
console.log(`Hora: ${data2.getHours()}`)        //pegamos a hora
console.log(`Min: ${data2.getMinutes()}`)       //pegamos os minutos
console.log(`Seg: ${data2.getSeconds()}`)       //pegamos os segundos
console.log(`Ms: ${data2.getMilliseconds()}`)   //pegamos os milisegundos
console.log(`Dia da semana: ${data2.getDay()}`) //pegamos o dia da semana(0 - domingo 6 - sábado)

//podemos pegar uma data de agora:
console.log(Date.now()) //O valor será retornado em milisegundos

//------------------------------------------------------------------------------------
//Vamos criar agora uma função para datas:
function zeroAEsquerda(num){
  return num >= 10 ? num : `0${num}`
};

function formataData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const minutos = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());
  const milisegundos = zeroAEsquerda(data.getMilliseconds());
  const diaSemana = zeroAEsquerda(data.getDay());

  return `Data: ${ano}/${mes}/${dia} Hora: ${hora}-${minutos}-${segundos}-${milisegundos}`
};

const data = new Date();
console.log(formataData(data));