/* Os operadores Javascript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / ++ -- += -= && || etc...

São separados em 6 categorias:

1) Operadores Aritméticos (matemáticos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos */

var idade, eleitor;

idade = 18;

// ? (Se essa condição for verdadeira retorna ....) : (Se essa condição for falsa retorna ...)
eleitor = (idade <18) ? "Não, ele não é eleitor!!!" : "Sim, ele é eleitor!!!"

//RESPOSTA
alert("A resposta é: " + eleitor + " A idade dele é de " + idade + " anos.")