/*Closure
Agora considere o seguinte exemplo:

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
Copy to Clipboard
Se você rodar este código o mesmo terá exatamente o mesmo efeito que o init() do exemplo anterior: a palavra "Mozilla" será mostrada na caixa de alerta. O que é diferente - e interessante - é o fato de que a função interna do displayName() foi retornada da função externa antes de ser executada.*/