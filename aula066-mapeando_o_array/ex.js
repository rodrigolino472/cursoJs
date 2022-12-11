
//Para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto
//OS VALORES SÃO PASSADOS POR REFERENCIA, OU SEJA, AS ALTERAÇÕES ACONTECEM NO ARRAY ORIGINAL
//para que o array original não seja alterado, precisamos usar o ...spread operator

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map(valor => valor.nome)
const nomeRemovido = pessoas.map(valor => {
    const apenasIdade = {...valor}
    delete apenasIdade.nome
    return apenasIdade
})
const id = pessoas.map((valor, indice) => {
    valor.id = indice + 1
    return valor
})

console.log(nomes)
console.log(nomeRemovido)
console.log(id)