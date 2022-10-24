/* VARIÁVEIS

São "recipientes" onde pode-se armazenar informações que podem variar, ou seja, podem ter qualquer tipo de valor. No Javascript tem 3 palavras-chaves para declarar variáveis: -> var -> let -> const */

//ATRIBUIÇÃO DAS VARIÁVEIS
let a=5;
let b=5;
let c=a+b;
let nome = "TESTANDO ";
let sobrenome = "A VARIÁVEL LET";
let NomeCompleto = nome + " " + sobrenome;

//CHAMANDO AS VARIÁVEIS
alert(c);
alert(nome+" "+sobrenome);

document.getElementById("texto").innerHTML = NomeCompleto