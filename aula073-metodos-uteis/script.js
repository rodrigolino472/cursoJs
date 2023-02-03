//Objetos assim como arrays são passados por referencia, ou seja, os valores são linkados caso um objeto atribuido a outro:

const produto1 = {nome: 'xicara', preco: 2}
const copia = produto1

copia.nome = 'pires'//alterando em copia, tambem alteramos em produto 1
console.log(produto1, copia)

//Uma forma de atribuir um objeto a outro sem referenciar é por meio do spread operator:

const produto2 = {...produto1}
const produto3 = Object.assign({}, produto1, {material: 'porcelana'})//criamos um objeto vazio e em seguida atribuimos as caracteristicas nos parametros seguintes


//ja vimos:
//Object.keys(retorna as chaves)
//Object.freeze(congela o objeto)
//Object.defineProperties (define várias propriedades)
//Object.defineProperty (define uma propriedade)

const produto = {nome: 'Produto', preco: 2.5}
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto))
console.log(Object.entries(produto))
