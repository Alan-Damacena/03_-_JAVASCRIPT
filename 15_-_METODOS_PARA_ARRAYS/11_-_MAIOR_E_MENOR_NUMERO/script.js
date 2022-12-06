const lista = [ 40, 100, 19, 5, 49, 32, 89];

function MaiorNumero(array){
    return Math.max.apply(null, array);
}

function MenorNumero(array){
    return Math.min.apply(null, array);
}

document.getElementById("teste").innerHTML = MaiorNumero(lista);

document.getElementById("teste2").innerHTML = MenorNumero(lista);