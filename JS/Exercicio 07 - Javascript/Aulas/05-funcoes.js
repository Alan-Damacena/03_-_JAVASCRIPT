//EXEMPLO 01

//declaração de variável
// var num = 2

//declaração de função
// function soma(num){
//     return num + 3;
// }

// //chamada de função e atribuição de valor retornado
// var resultado = soma(num)

//impressão de resultado
// console.log(resultado)

//EXEMPLO 02
function conta (x,y){
    return x * y;
}

console.log(conta(2,2))

console.log("\n")

//EXEMPLO 03
let somando = (n1,n2) => n1 - n2;
console.log(somando(2,3))

console.log("\n")

//EXEMPLO 04
var numero = 20
var resultado;

function quadrado(numero){
    return numero * numero
}

resultado = quadrado(numero)

console.log(resultado)

console.log("\n")

//EXEMPLO 05
//variável de escopo global
let num = 10;

function multiplica(num){
    //variável de escopo de função
    let result = 1;

    //variável de escopo de bloco
    for (let i = 1; i <= num; i++){

        console.log("i= ",i)
        result *= i

    }

}

multiplica(num)