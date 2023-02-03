//classes em js funcionam como funções construtoras
//sempre que precisarmos receber parâmetros dentro da classe precisamos usar o método constructor para receber esses parâmetros.
class People {
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }
    talk(){
        console.log(`${this.name} is talking!.`)
    }
}

function People2(name, lastName){
    this.name = name
    this.lastName = lastName
}

People2.prototype.talk = function(){
    console.log(`${this.name} is talking!.`)
}

const p1 = new People('Adam', 'Carter')
const p2 = new People2('Adam', 'Carter')
console.log(p1)
console.log(p2)
