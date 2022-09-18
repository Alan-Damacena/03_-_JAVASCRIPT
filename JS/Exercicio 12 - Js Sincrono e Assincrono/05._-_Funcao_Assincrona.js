//ASYNC para o js saber que essa é uma função assíncrona
async function somar(n1, n2){

    let soma;
 
    setTimeout(() =>{

        console.log(n1+n2)

        soma = n1 + n2;

        console.log("Soma:",soma)

    }, 5000)

}

function subtrair(n1, n2){

    return n1 - n2

}

function multiplicar(n1, n2){

    return n1 * n2

}

function dividir (n1, n2){

    return n1 / n2

}

async function calculos(){

    let a = 30
    let b = 10

    await somar(a,b) //espere a função somar retornar
    let subtracao = subtrair(a,b)
    let multiplicacao = multiplicar(a,b)
    let divisao = dividir(a,b)

    console.log('Subtração: ',subtracao)
    console.log('Multiplicação: ',multiplicacao)
    console.log('Divisão: ',divisao)

}

calculos()