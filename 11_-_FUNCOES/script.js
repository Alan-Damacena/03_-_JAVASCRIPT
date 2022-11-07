/* Uma função Javascript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entradae ele te dá uma saída.

Pode ser encontrado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função javascript é executada quando "algo" a invoca (chama-a). */

//EXEMPLO 01
//DECLARANDO UMA FUNÇÃO DE SOMA
function soma(valor1,valor2){
    return valor1 + valor2;
}

//APLICANDO O RESULTADO DELA NO HTML
document.getElementById("texto1").innerHTML = ("A soma de 10 + 10 é igual a")
document.getElementById("texto2").innerHTML = soma(10,10);


//EXEMPLO 02 - FUNÇÃO DE COTAÇÃO DO DÓLAR]
function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

//INVOCANDO A FUNÇÃO
var resultadoCotacao = realParaDolar(valorReal, cotacao)

//MOSTRANDO O RESULTADO NO HTML
alert("COTAÇÃO: O valor em real é de R$ " + valorReal + " e o valor em dólar é de U$ " + resultadoCotacao);


//EXEMPLO 03 - INVOCANDO OUTRA FUNÇÃO POR MEIO DE UM CLIQUE
function alertaHello(){
    alert("Olá Pessoal!!!")
}


//EXEMPLO 04
function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert("A temperatura é de " + x + " graus Celsius");