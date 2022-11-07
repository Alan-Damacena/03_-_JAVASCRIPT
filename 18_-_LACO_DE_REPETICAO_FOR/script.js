/* LAÇO DE REPETIÇÃO FOR
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes. */

//EXEMPLO 01
for (let i = 0; i < 101; i++) {
    document.getElementById("teste").innerHTML += i + " , ";
}

//EXEMPLO 02
let ano= new Date().getFullYear();

for(let i = ano; i > 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>"+ i + "</option>"
}

//EXEMPLO 03
const carros = ["GOL","FUSCA","BRASILIA","DEL REY","FORD"];

let tamanho = carros.length;

for(let i = 0; i < tamanho; i ++){
    document.getElementById("teste2").innerHTML += carros[i] + " -  ";
}