//Factory function / função fábrica

function pokemon(nome, tipo){
  return {
    nome,
    tipo,
    atk(atk1){
      return `${nome} ataque ${atk1}!`//Aqui, o nome e o tipo que são acessados são os da função pokemon e nao o objeto, para acessar o objeto preciso do this, this usa como referencia quem chama a função, no caso poke1
    }
  }
}

let poke1 = pokemon('Nidoqueen', 'terra')
console.log(poke1.atk('Earthquake'))


//Podemos executar o método dentro do próprio objeto, ou seja sem usar () ao chamar a função, chama-se get:

function imc(alt, pes){
  return{
    altura: alt,
    peso: pes,
    get indice(){
      return (this.peso / (this.altura ** 2)).toFixed(2)
    }
  }
}
let pessoa = imc(1.80, 100)
console.log(pessoa.indice)


//Podemos usar o set pra setar um valor para um objeto

function dados(nome, sobrenome){
  return {
    nome: nome,
    sobrenome: sobrenome,
    get nomeCompleto(){
      `Nome: ${this.nome}${this.sobrenome}.`
    },

    //O set altera as propriedades acima que sao recebidas pelo get
    set nomeCompleto(param){
      param = param.split(' ')
      this.nome = param.shift()
      this.sobrenome = param.join(' ')
      console.log(this.nome, this.sobrenome)
    }
  }
}

let n1 = dados('Adam', 'goncalves')
n1.nomeCompleto = 'Rodrigo Lino Gonçalves'//essa igualdade significa que o set da função recebe esse nome
//console.log(n1.nomeCompleto)
