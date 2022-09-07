function criaCalculadora(){
  return{
    display: document.querySelector('.display'),
    inicia(){
      this.cliqueBotoes()
      this.enter()
    },
    enter(){
      this.display.addEventListener('keyup', e => {
        display.focus()
        if(e.keyCode === 13){
          this.realizaConta()
        }
      })
    },
    realizaConta(){
      let conta = this.display.value
      try{
        conta = eval(conta)
        if(!conta){
          alert('Conta inválida')
          return
        }
        this.display.value = conta
      }catch(e){
        alert('Conta inválida')
      }
    },
    apagar(){
      this.display.value = this.display.value.slice(0, -1)
    },
    clear(){
      this.display.value = ''
    },
    cliqueBotoes(){
      document.addEventListener('click', function(e){
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText);
        }else if(el.classList.contains('btn-clear')){
          this.clear()
        }else if(el.classList.contains('btn-del')){
          this.apagar()
        }else if(el.classList.contains('btn-eq')){
          this.realizaConta()
        }
      }.bind(this));
    },
    btnParaDisplay(valor){
      this.display.value += valor
    }
  }
}
const calcular = criaCalculadora()
calcular.inicia()