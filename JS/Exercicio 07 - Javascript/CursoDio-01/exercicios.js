//ATIVIDADE: ALUNOS APROVADOS

//Criar uma função que recebe o array "ALUNOS" e um número que irá representar a média final;
//Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais a média final
//Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno

const alunos = [
    {
        nome: 'Alan',
        nota: 3,
        turma: '1B',
    },
    {
        nome: 'Rosa',
        nota: 8,
        turma: '2C',
    },
    {
        nome: 'Felipe',
        nota: 6,
        turma: '3D',
    },
];

function alunosAprovados(arr, media) {

    let aprovados = [];

    for(let i = 0; i < arr.lenght; i++){

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }

    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 10))