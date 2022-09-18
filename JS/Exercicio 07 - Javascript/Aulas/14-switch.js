//EXEMPLO 01
var opcao = 'a';

switch(opcao){

    case 'a':
        console.log("Opção A");
        break; //parar a execução do switch caso ache a opção

    case 'b':
        console.log('Opção B');
        break //parar a execução do switch caso ache a opção

    default:
        console.log('Opção Inválida');
        break //parar a execução do switch caso ache a opção
}

//EXEMPLO 02
var numero = 10;
var resultado;

var opcao = '+'

switch(opcao){

    case '+':
        resultado = numero + numero;
        break; //parar a execução do switch caso ache a opção

    case '-':
        resultado = numero - numero;
        break; //parar a execução do switch caso ache a opção

    default:
        console.log('Operador Inválido');
        break; //parar a execução do switch caso ache a opção

}

console.log(resultado)