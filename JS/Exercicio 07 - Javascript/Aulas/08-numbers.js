//% deve ser colocada como string (entre aspas)

//usando operadores aritméticos
let num = 1;
console.log(num + 1)

//usando operadores % (que é o RESTO de uma divisão)
let valor = 5;
console.log(valor % 2)

// Verificando se o valor é PAR ou ÍMPAR
if (valor % 2 == 0){

    console.log("É PAR")

} else{

    console.log("É ÍMPAR")

}

// Mostrando o valor de PI
console.log(Math.PI)

//Arredondando Valores
var numeross = 10 / 3;
console.log(Math.floor(numeross)) //PRA BAIXO
console.log(Math.ceil(numeross)) // PRA CIMA

//Retornando como String
console.log(numeross.toString())

//Usando ! para gerar a negação da forma booleana (true or false)
console.log(!false)