/*

Os operadores Javascript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / ++ -- += -= && || etc...

São separados em 6 categorias:

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos

*/

//Os Operadores de Atribuição nada mais é do que atribuir um valor a uma variável por meio do sinal de igual (=)

var valor1, valor2, total, total2, total3, total4, total5, total6, total7, total8, total9;

valor1 = 8;
valor2 = 10;
valor3 = 10;
valor4 = "8";

// == É o sinal de comparação (sem levar em consideração o tipo do valro (se é string ou number))
total = (valor1 == valor2); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)
total2 = (valor2 == valor3); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// === É o sinal de comparação (esse leva em consideração o tipo do valro (se é string ou number))
total3 = (valor4 === valor1); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// != É o sinal de diferenciação, ou seja, se um valor é diferente do outro (leva em consideração o valor, NÃO o tipo)
total4 = (valor2 != valor3); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// !== É o sinal de diferenciação, ou seja, se um valor é diferente do outro (leva em consideração o valor e o tipo)
total5 = (valor1 !== valor4); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// < MENOR QUE
total6 = (valor1 < valor2); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// > MAIOR QUE
total7 = (valor1 > valor2); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// <= MENOR OU IGUAL QUE
total8 = (valor2 <= valor3); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

// >= MAIOR OU IGUAL QUE
total9 = (valor2 >= valor3); //Pode retornar TRUE (verdadeiro) ou FALSE (falso)

alert("8 É IGUAL A 10? " + total); //FALSE
alert("10 É IGUAL A 10? " + total2); //TRUE
alert(" (OITO) É IGUAL A 8? " + total3); //FALSE
alert("10 É DIFERENTE DE 10? " + total4); //FALSE
alert("8 É DIFERENTE DE (OITO)? = " + total5); //TRUE
alert("8 É MENOR QUE 10? " + total6); //TRUE
alert("8 É MAIOR QUE 10? " + total7); //FALSE
alert("10 É MENOR OU IGUAL A 10? " + total8); //TRUE
alert("10 É MAIOR OU IGUAL A 10? " + total9); //TRUE