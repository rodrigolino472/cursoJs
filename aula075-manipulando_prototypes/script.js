// new Object -> Object.prototype
const objA = {//quando criamos um objeto literal, o 'new Object' fica implícito.
    chaveA: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
}

const objC = {
    chaveC: 'C'
}

//por padrão todos os objetos recebem o prototype, mas podemos designar um proto:

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB)
console.log(objC)

//Até agora testamos com objetos literais agora vamos testar com funções construtoras:

function Produto(preco, produto){
    this.preco = preco,
    this.produto = produto
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

//Agora vamos associar os metodos de "Produto" dentro de "p2":
const p2 = {
    nome: 'calça',
    preco: 50
}
Object.setPrototypeOf(p2, Produto.prototype)

const p1 = new Produto(35, 'blusa')
p1.aumento(10)
p2.desconto(5)
console.log('produto1: ', p1)
console.log('produto2: ', p2)

//Posso criar um objeto já especificando um prototype:
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 75
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'caneca'
    }
})
p3.desconto(10)
console.log('produto3: ', p3)
