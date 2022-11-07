/* if e else */

//EXEMPLO 01: LAMPADA
const interruptor = "on"

if (interruptor=="on"){
    alert("EXEMPLO 01: A LÂMPADA ESTÁ LIGADA!!!!!")
} else{
    alert("EXEMPLO 01: A LÂMPADA ESTÁ DESLIGADA!!!")
}

//EXEMPLO 02: HORAS
//PEGANDO A HORA ATUAL
const hora = new Date().getHours();

if (hora <12){
    alert('EXEMPLO 02 - BOM DIA!!!!');
} else if (hora <18){
    alert('EXEMPLO 02 - BOA TARDE!!!!');
} else {
    alert ('EXEMPLO 02 - BOA NOITE !!!!');
}

//EXEMPLO 03:VERIFICANDO
function verificar(){
    const nome = document.getElementById("nome").value;

    if (nome == "" || nome ==null){
        const p = document.getElementById("teste");
        p.innerHTML = "O CAMPO NÃO PODE SER VAZIO !!!!!";
        p.style.color = "red";
        p.style.fontWeight = "bold";
    } else {
        const p = document.getElementById("teste");
        p.innerHTML = "PREENCHIMENTO CORRETO !!!!!";
        p.style.color = "green";
        p.style.fontWeight = "bold";

    }
}




