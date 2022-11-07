/* SWITCH

É usado ara realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível nao será executada e o valor padrão será acionado. */

function verificarCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //Dessa forma ele não faz diferença ao escrever com letras maiúsculas ou minúsculas

    switch (cor) {

        case "azul":
            //o que acontece
            document.body.style.backgroundColor = "blue"
            break;

        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red"
            break;

        case "amarelo":
            //o que acontece
            document.body.style.backgroundColor = "yellow"
            break;

        default:
        //o que acontece
        document.body.style.backgroundColor = "white"
        document.getElementById("teste").innerHTML = "Nenhuma cor disponível para " + cor;
    }

}

function DiaDaSemana(){
   var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {

        case 0:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Domingo"
            break;

        case 1:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Segunda-Feira"
            break;

        case 2:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Terça-Feira"
            break;
        
        case 3:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Quarta-Feira"
            break;

        case 4:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Quinta-Feira"
            break;

        case 5:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Sexta-Feira"
            break;

        case 6:
            //o que acontece
            document.getElementById("teste2").innerHTML = "Hoje é Sábado"
            break;

        default:
            //o que acontece
            document.getElementById("teste2").innerHTML = "NÃO SEI QUE DIA É !!!!"
            break;
    }

}

