var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
function increment() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1
    currentNumberWrapper.innerHTML = currentNumber
  }
  if (currentNumber >= 0) {
    var preto = document.getElementsByTagName('span')[0]
    preto.style.color = 'black'
  }
}
function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber < 0) {
    var vermelho = document.getElementsByTagName('span')[0]
    vermelho.style.color = 'red'
  }
}
