/* VARIÁVEIS 

São "recipientes" onde pode-se armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor. No Javascript tem 3 palavras-chaves para declarar variáveis: -> var -> let -> const */

//DECLARAÇÃO DE VARIÁVEIS
var a,b,c,nome,sobrenome;

//ATRIBUIÇÃO DOS VALORES
var a=5;
var b=5;
var c=a+b;
var nome = "TESTANDO ";
var sobrenome = "A VARIÁVEL VAR";
var NomeCompleto = nome + " " + sobrenome;

//CHAMANDO AS VARIÁVEIS
alert(c);
alert(nome+" "+sobrenome);

document.getElementById("texto").innerHTML = NomeCompleto