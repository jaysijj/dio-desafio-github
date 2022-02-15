// Dada a função calculaidade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

const pessoa1 = {
    nome: 'Jaime',
    idade: 30}
const pessoa2 = {
    nome: 'raynara',
    idade: 25
    }
    

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade.`

}

console.log(calculaIdade.call(pessoa1, 5))

console.log(calculaIdade.call(pessoa2,10))

console.log(calculaIdade.apply(pessoa1, [5]))