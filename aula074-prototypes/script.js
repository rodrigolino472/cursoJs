/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo 
Preotótipo é o termo utilizado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo(null) até encontrar (ou não) tal membro.
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Dessa forma otimizamos os processos, toda instancia desse objeto terá a propriedade 'nomeCompleto'
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

console.log('prototype: ', Pessoa.prototype)//Todos os métodos desse construtor 'Pessoa' fica dentro de prototype, ou seja _proto_: prototype === _proto_

const pessoa1 = new Pessoa('Luiz', 'O.');// <-Pessoa = função construtora
const data = new Date() // <- Date = função = construtora

console.dir(pessoa1)
console.log(pessoa1.nomeCompleto())
console.dir(data)

//A cadeia de busca do js funciona da seguinte forma: Pessoa1 --> Pessoa1.prototype --> Object.prototype