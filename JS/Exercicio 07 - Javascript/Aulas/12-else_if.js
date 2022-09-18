//EXEMPLO 01
var numero = 100;

if (numero <= 100) {

    console.log("Número menor ou igual a 100")

}

// Pode-se colocar quantos else_if quiser
else if (numero > 100 && numero <= 120) {

    console.log("Número maior que 100")
}

else {

    console.log("Número extrapola o limite")
}


//EXEMPLO 02
var idade = 12

var estudante = true

if (idade <=18 && estudante == true){

    console.log("Meia Entrada")

} else if (idade <=12 && estudante == true){

    console.log("Entrada Gratuita")
} else{

    console.log("Entrada Normal")
}