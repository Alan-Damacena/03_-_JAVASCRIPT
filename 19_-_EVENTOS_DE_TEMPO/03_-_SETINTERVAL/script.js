/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com Javascript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente. */

//EXERCICIO 01
function ativarContagem(){
    tempo = setInterval(function(){
        let cronometro = document.getElementById("tempo").innerHTML;
        let soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;
    }, 1000);
}

function pararContagem(){
   clearInterval(tempo)
}

//EXERCICIO 02
function ativarContagem1(){
    tempo = setInterval(function(){
        let cronometro = document.getElementById("tempo1").innerHTML;
        let soma = parseInt(cronometro) - 1;

        if(soma === 0){
            document.getElementById("tempo1").innerHTML = "TEMPO ESGOTADO!!!";
            pararContagem1()
        }else{
            document.getElementById("tempo1").innerHTML = soma;
        }
    }, 1000);
}

function pararContagem1(){
   clearInterval(tempo)
}
