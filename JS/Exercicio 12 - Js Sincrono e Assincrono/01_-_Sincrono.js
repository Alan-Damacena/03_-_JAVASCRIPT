//Exemplo de SINCRONO - onde as funções são lidas de cima para baixo, de maneira sequencial 
//Ou da ordem que foram chamadas

function obrigado() {
    console.log("Obrigado!")
}

function deNada() {
    console.log("De nada")
}

obrigado()

deNada()