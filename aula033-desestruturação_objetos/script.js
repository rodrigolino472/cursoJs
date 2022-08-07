//desestruturação de objetos
let cadastro = {
  nome: 'Rodrigo',
  sobrenome: 'Lino',
  idade: 25,
  endereco: {
    bairro: 'Pajuçara',
    municipio: 'Maracanaú',
    rua: 'Luiz Mendes',
    num: 150
  }
};
//perceba que seleciono o atributo do objeto e adiciono a uma variável
let {endereco} = cadastro;
console.log(endereco);

//caso não exista o atributo no objeto posso determinar um valor padrão:
let {curso = 'Ciencia da computação'} = cadastro;
console.log(curso);

//posso mudar o nome da propriedade também:
let {nome: n = 'Adam'} = cadastro;
console.log(n);

//selecionando objeto dentro de outro:
let {endereco: {rua, bairro}, endereco: e, ...restante } = cadastro;
console.log(rua, bairro, e, restante);
