/* SWITCH

É usado ara realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível nao será executada e o valor padrão será acionado. */

function verificarCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

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

