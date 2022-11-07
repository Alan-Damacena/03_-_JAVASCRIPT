/* Eventos são acçõs disparadas pela interação dos usuários na página.

É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

ONMOUSEMOVE -> Disparado quando o mouse é movido no elemento.*/

function adiciona_texto(){
    let p = document.getElementById("texto");
    p.append("O MOUSE SE MOVEU!!!  ")
}