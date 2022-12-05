const lista = [ 40, 100, 19, 5, 49, 32, 89];

const lista2 = [ 40, 100, 19, 5, 49, 32, 89];

lista.sort(function(a,b){return a-b});

lista2.sort(function(a,b){return b-a});

document.getElementById("teste").innerHTML = lista;

document.getElementById("teste2").innerHTML = lista2;