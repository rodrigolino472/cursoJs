//É uma forma de fazer os métodos funcionarem de forma diferente. ou subclasse
//Fazer o mesmo método se comportar de forma diferente em classes filhas de um mesmo pai caracteriza polimorfismo

//classe mãe
function Count(agency, count, balance ){
    this.agency = agency;
    this.count = count;
    this.balance = balance;
}
Count.prototype.withdraw = function(value){
    if(value > this.balance){
        console.log(`Error, insufficient balance. Current balance R$${this.balance}`)
        return
    };
    this.balance -= value;
    this.currentBalance();
}
Count.prototype.deposit = function(value){
    this.balance += value;
    this.currentBalance();
}
Count.prototype.currentBalance = function(){
    console.log(`Ag/c: ${this.agency}/${this.count} | Saldo: R$${this.balance.toFixed(2)}`)
}

function CC(agency, count, balance, credit){
    Count.call(this, agency, count, balance)
    this.credit = credit
}
//conta corrente
CC.prototype = Object.create(Count.prototype)
CC.prototype.constructor = CC
CC.prototype.withdraw = function(value){
    if(value > (this.balance + this.credit)){
        console.log(`Error, insufficient balance. Current balance R$${this.balance}`)
    }
}

//conta poupança
function CP(agency, count, balance, credit){
    Count.call(this, agency, count, balance)
    this.credit = credit
}
CP.prototype = Object.create(Count.prototype)
CP.prototype.constructor = CP

//criando conta corrente
const count1 = new CC(11, 12, 0, 1245)
count1.deposit(1758)
count1.withdraw(5000)