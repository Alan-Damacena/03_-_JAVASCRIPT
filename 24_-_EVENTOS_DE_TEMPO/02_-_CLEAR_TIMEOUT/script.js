/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com Javascript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente. */

function ativarContagem() {
        document.getElementById("tempo").innerHTML = "COMEÇOU A CONTAR!!!";

        //ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO DETERMINADO
        tempo = setTimeout(function () {
            document.body.style.background = "red"
            document.getElementById("tempo").innerHTML = "EXECUTOU O SETTIMEOUT";
        }, 5000);
}


function pararContagem(){
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "PAROU A CONTAGEM"
}