class ContaBancária{
    constructor (agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0                
    }

    get saldo(){
        return this._saldo
    }
    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if (valor>this._saldo){
            return 'Operação negada'
        }
        this._saldo = this._saldo-valor

        return this._saldo
    }
    depositar(valor){
        this._saldo = this._saldo + valor

        return this._saldo
    }
}

class ContaCorrente  extends ContaBancária{  //Extends faz uma ligação com a "class ContaBancária"
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero)   // Indica quais valores estão na "class ContaBancária"
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }
    get cartaoCredito(){
        return this._cartaoCredito
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

class ContaPoupança extends ContaBancária{
    constructor (agencia, numero){
        super(agencia, numero)
        this.tipo = 'poupança'
    }
}
class ContaUniversitaria extends ContaBancária{
constructor (agencia, numero){
    super(agencia, numero)
    this.tipo = 'iniversitaria'
}
sacar(valor) {
    if (valor>500){
        return "Operação negada"
    }
    this._saldo = this._saldo - valor
}
}

/* Para manipular os dados apresentados usar os comandos no console:
const minhaCOnta = new ContaCorrente(1, 1234, true)
minhaConta.saldo //Vai mostrar o saldo
minhaConta.depositar (1000)  // Vai depositar 1000 reais
minhaConta.sacar (500)  // Vai retirar 500 

*/
