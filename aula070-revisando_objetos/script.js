//objeto literal é declarado por chaves: {}

const pessoa1 = {
    nome: 'Adam',
    sobrenome: 'Lino'
}

const chave1 = 'sobrenome'
console.log(pessoa1.nome)   //posso acessar as propriedades com . ou colchetes
console.log(pessoa1[chave1])

//Objeto construtor:

const pessoa2 = new Object()
pessoa2.nome = 'Rodrigo'
pessoa2.sobrenome = 'Gonçalves'

console.log(pessoa2)


//factory functions 

function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Igor', 'Lino')
console.log(p1.nomeCompleto)

//constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa('Silvia', 'Lino')//O new, atrela o this. dentro do objeto
console.log(p2)

//Object.freeze() serve para freezar um objeto:

Object.freeze(p2)
p2.nome = 'outra coisa'
console.log(p2)//Onome continuará o mesmo