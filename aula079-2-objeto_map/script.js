const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

//apenas para vizualização
const novasPessoas = {}
for (const {id, nome} of pessoas){
    console.log(id, nome)
}


//dessa forma os ids ficam invertidos e os ids viram string
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas[id] = {...pessoa}
}

console.log(novasPessoas)

//forma correta
//Assim temos um map ao invés de um objeto, a relação chave/valor se mantém, de bonus ainda temos o id se mantendo como number.
const novasPessoas1 = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas1.set(id, { ...pessoa})
}

console.log('Forma correta: ', novasPessoas1)//caso queira pegar a pessoa de id 2 basta usar get ao inves do set usado na inserção de dados. ex: novasPessoas1.get(2) -> resposta: (id: 2, nome: 'Maria')


//brincando com destruturing:
for (const [identificador, {id, nome}] of novasPessoas1){
    console.log('identificado: ', identificador)
    console.log('id: ', id)
    console.log('nome: ', nome)
}

for (const chave of novasPessoas1.keys()){
    console.log('pegando so as chaves: ', chave)
}
for (const valor of novasPessoas1.values()){
    console.log('pegando so os valores: ', valor)
}