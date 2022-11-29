const lista = ["arroz", " feijão", " macarrão", " leite"];
lista.splice(1,0,"Item adicionado 1", "Item adicionado 2")

document.getElementById("teste").innerHTML = lista;