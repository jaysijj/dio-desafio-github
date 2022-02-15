const alunos = [
    {
        nome: 'Jaime',
        nota: 9
    },{
        nome: 'Raynara',
        nota: 10
    },{
        nome: 'Jamyle',
        nota: 5
    }]

function aprovados(alunos, media){
    console.log(`Alunos aprovados: `)
    for (i=0;i<alunos.length;i++){
        const {nome, nota} = alunos[i]
        if (nota>=media){
            console.log(nome)
        }
    }

}


aprovados(alunos, 7)
