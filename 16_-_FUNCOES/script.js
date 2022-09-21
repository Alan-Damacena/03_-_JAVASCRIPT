/*
Uma função Javascript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entradae ele te dá uma saída.

Pode ser encontrado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função javascript é executada quando "algo" a invoca (chama-a).
*/

//DECLARANDO UMA FUNÇÃO DE SOMA
function soma(valor1,valor2){
    return valor1 + valor2;
}

//APLICANDO O RESULTADO DELA NO HTML
document.getElementById("texto1").innerHTML = ("A soma de 10 + 10 é igual a")
document.getElementById("texto2").innerHTML = soma(10,10);

//APLCIANDO O RESULTADO NO ALERTA DA PÁGINA
var total = soma(10,23); //CHAMADA DA FUNÇÃO
alert("A soma de 10 + 23 é igual a " + total)


//EXEMPLO 02 - FUNÇÃO DE COTAÇÃO DO D[OLAR]
function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

//INVOCANDO A FUNÇÃO
var resultadoCotacao = realParaDolar(valorReal, cotacao)

//MOSTRANDO O RESULTADO NO HTML
alert("COTAÇÃO: O valor em real é de R$ " + valorReal + " e o valor em dólar é de U$ " + resultadoCotacao);