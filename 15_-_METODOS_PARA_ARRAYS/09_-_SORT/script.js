const lista1 = [ " ovo", " feijão", " macarrão", " pimenta", " arroz"];

const lista2 = [" arroz", " feijão", " macarrão", " ovo", " pimenta"];

const alfabetica = lista1.sort();

const decrescente = lista2.reverse();

document.getElementById("teste1").innerHTML = alfabetica;

document.getElementById("teste2").innerHTML = decrescente;