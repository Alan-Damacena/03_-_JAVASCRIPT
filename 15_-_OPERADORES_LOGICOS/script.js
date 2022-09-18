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

var idade, eleitor, resultado, resultado2, resultado3;

idade = 65;

// && = E
resultado = (idade > 66 && idade < 70); //true ou false

// || = OU
resultado2 = (idade === 65 || idade === 72); //true ou false

// ! = NEGAÇÃO (CONTRÁRIO)
resultado3 = !(idade === 50); //true ou false

alert(idade + " anos está entre 66 E 70 anos? " + resultado)

alert(idade + " anos é igual a 65 anos OU igual a 72 anos? " + resultado2)

alert(idade + " anos é DIFERENTE de 50 anos? " + resultado3)