/* Eventos são acçõs disparadas pela interação dos usuários na página.

É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas. Existem muitos eventos. Veja os mais utilizados:

ONMOUSEOUT -> Disparado quando o mouse é movido para fora do elemento. */

function vira_verde(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "gray";
    volks.style.display = "block";
    volks.style.margin = "auto";   
}