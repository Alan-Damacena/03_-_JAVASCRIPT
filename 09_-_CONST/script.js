/* 
Variáveis 

São "recipientes" onde pode-se armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor.

No Javascript tem 3 palavras-chaves para declarar variáveis:
-> var
-> let
-> const
*/

//ATRIBUIÇÃO DAS VARIÁVEIS
const a=5;
const b=5;
const c=a+b;
const nome = "Alan";
const sobrenome = "Damacena";
const NomeCompleto = nome + " " + sobrenome;

//CHAMANDO AS VARIÁVEIS
alert(c);
alert(nome+" "+sobrenome);

document.getElementById("texto").innerHTML = NomeCompleto
