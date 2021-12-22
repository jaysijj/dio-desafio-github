function calculadora() {
  const operação = Number(
    prompt(
      ' Qual operação você quer?\n[ 1 ] Soma \n[ 2 ] Subtração \n[ 3 ] multiplicação \n[ 4 ] Divisão \n[ 5 ] Potenciação  '
    )
  )
  if (!operação || operação < 1 || operação > 5) {
    alert('Valor incorreto')
    calculadora()
  } else {
    let n1 = Number(prompt('Digite o primeiro valor.'))
    let n2 = Number(prompt('Digite o segundo valor.'))
    let resultado

    if (!n1 || !n2) {
      alert('Valor incorreto')
      calculadora()
    } else {
      function soma() {
        resultado = n1 + n2
      }
      function subtração() {
        resultado = n1 - n2
      }
      function multiplicação() {
        resultado = n1 * n2
      }
      function divisão() {
        resultado = n1 / n2
      }
      function potencia() {
        resultado = n1 ** n2
      }
      /*
      if (operação == 1) {
        soma(n1, n2)
      } else if (operação == 2) {
        subtração(n1, n2)
      } else if (operação == 3) {
        multiplicação(n1, n2)
      } else if (operação == 4) {
        divisão(n1, n2)
      } else if (operação == 5) {
        potencia(n1, n2)
      }
*/
      switch (operação) {
        case 1:
          soma()
          break
        case 2:
          subtração()
          break
        case 3:
          multiplicação()
          break
        case 4:
          divisão()
          break
        case 5:
          potencia()
          break
      }
      alert(`O resultado é: ${resultado}`)

      function novaOperação() {
        let escolha = prompt('Você quer continuar? [S/N] ')
        if (escolha == 'S' || escolha == 's') {
          calculadora()
        } else if (escolha == 'N' || escolha == 'n') {
          alert('Fechando calculadora.')
        } else {
          alert('Valor errado, tente novamente.')
          novaOperação()
        }
      }
      novaOperação()
    }
  }
}
calculadora()
