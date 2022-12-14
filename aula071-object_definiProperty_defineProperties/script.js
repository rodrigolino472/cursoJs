// defineProperty e defineProperties
//Usamos para freezaruma propriedade dentro do objeto

function Produto (nome, preco, estoque){
    //O this como parametro referencia o objeto, em seguida informamos a propriedade
    Object.defineProperty(this, 'estoque', {
        enumerable: true,   //Mostra a chave, caso estivesse false, a propriedade ficaria oculta
        value: estoque,     //definimos o valor da propriedade
        writable: false,    //diz se posso alterar o valor dessa propriedade
        configurable: false  //define se posso configurar a chave ou não
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true,   
            value: nome,     
            writable: false,    
            configurable: false
        },
        preco: {
            enumerable: true,   
            value: preco,     
            writable: false,    
            configurable: false
        }
    })

}

const p1 = new Produto('blusa', 20, 5)
p1.estoque = 5000//perceba que mesmo atribuindo um novo valor o atributo permanece o mesmo valor devido a propriedade writable
delete p1.estoque//Perceba que não consigo deletar o valor devido a propriedade configurable
console.log(p1)