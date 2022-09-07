function Calculadora(){
  this.display = document.querySelector('.display')
  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target
      if(el.classList.contains('btn-num')) this.addNumDisplay(el);
      else if(el.classList.contains('btn-clear')) this.clear();
      else if(el.classList.contains('btn-del')) this.del();
      else if(el.classList.contains('btn-eq')) this.realizaConta();
    })
  }
  this.pressEnter = () => {
    document.addEventListener('keyup', (event) => {
      if(event.keyCode === 13){
        this.realizaConta();
      }
    })
  }
  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  }
  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);
  this.realizaConta = () => {
    const conta = eval(this.display.value);
    try{
      if(!conta){
        alert('Conta inválida')
        return
      }
      this.display.value = conta;
    }catch(err){
      alert('Conta inválida')
      return
    }
  }
  this.inicia = () => {
    this.capturaCliques();
    this.pressEnter();
  };
};

const calculadora = new Calculadora();
calculadora.inicia();
