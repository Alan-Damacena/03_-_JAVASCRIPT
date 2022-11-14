/* JSON

JSON significa JavaScript Objet Notation que traduzido pro português fica algo como notação de objeto JavaScript.

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() => Converte texto no padrão JSON em objetos
JSON.stringify() => Converte objetos em texto padrão JSON */

//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
}

//CONVERTEU O TEXTO JSON
let texto = JSON.stringify(carro);

//COLOCOU O TEXTO NO NOSSO
document.getElementById("area").innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj.modelo);