/*

ARRAYS

Os arrays JavaScript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz","feijão","macarrão","leite"];

A lista[0] (lista na posição 0)
A lista[1] (lista na posição 1)

E assim por diante.

*/
                
const lista = [ 40, 100, 19, 5, 49, 32, 89];

const Maior20 = lista.filter(filtragem)

function filtragem(value, index, array){

    return value > 20;

}

document.getElementById("teste").innerHTML = Maior20;



