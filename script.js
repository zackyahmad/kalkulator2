class Calculator{
  updateDisplay(){
    document.getElementById('display').value = this.display;
  }
  constructor(){
    this.display = '';
  }
  nomor(number){
    this.display += number;
    this.updateDisplay();
  }
  operator(operator){
    if(this.display !== ''){
      this.display +=' '+ operator + ' ';
      this.updateDisplay();
    }
  }
  hapus(){
    this.display ='';
    this.updateDisplay();
  }
  backSpace(){
    this.display = this.display.slice(0, -1);
    this.updateDisplay();
  }

  samadengan(){
    try {
      const result = eval(this.display);
      this.display = result;
      this.updateDisplay();
    } catch (error) {
      this.display = 'Error';
      this.updateDisplay();
    }
  }
}
const kalkulator = new Calculator();