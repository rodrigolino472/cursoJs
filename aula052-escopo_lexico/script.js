//O trecho do código em que uma variável qualquer é identificada por um nome é definido como o escopo léxico da variável
/*
Escopo léxico
Considere a função abaixo:

function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init();
Copy to Clipboard
A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função aninhada (um closure) — ela é definida dentro da função init(), e está disponivel apenas dentro do corpo daquela função. Diferente de init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.

Rode o código e veja que isso funciona. Este é um exemplo de escopo léxico: em JavaScript, o escopo de uma variável é definido por sua localização dentro do código fonte (isto é aparentemente léxico) e funções aninhadas têm acesso às variáveis declaradas em seu escopo externo.*/