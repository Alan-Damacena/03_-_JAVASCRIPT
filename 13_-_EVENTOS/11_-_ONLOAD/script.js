/* Eventos são acçõs disparadas pela interação dos usuários na página.

É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

ONLOAD -> Disparado quando a página terminou de ser carregada. */

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}