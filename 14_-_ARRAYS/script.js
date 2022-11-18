/* Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0)
A lista[1] (lista na posição 1)

E assim por diante. */

                 //0      //1         //2       //3
const lista = [" arroz", " feijão", " macarrão", " leite"];

//Mudando item de uma array
lista[0] = "café"

//Adicionando um item ao final do array
//lista[lista.length] = "FELIPE"

//Descobrindo se determinada variável é ARRAY
//Array.isArray(lista);

let x = lista[3];

alert("O item 3 da lista é " + x);
alert("O item 0 da lista é " + lista[0]);
alert("A minha lista possui um total de " + lista.length + " itens!!!");
alert("O último item da lista é " + lista[lista.length -1]);
alert("Adicionado na lista o item " + lista.push(" ALAN") + " , logo, o último item da lista é " + lista[lista.length -1])

console.log(lista);
document.getElementById("lista").innerHTML = lista

/*  FUNCIONA DESSE JEITO TAMBÉM

const lista = new Array("arroz", "feijão", "macarrão", "leite") */