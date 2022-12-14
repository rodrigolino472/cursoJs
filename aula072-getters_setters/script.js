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