/* MANIPULAR DATAS EM JAVASCRIPT */ 

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);

//PEGAR O ANO ATUAL COM 4 DIGITOS
let ano = data.getFullYear();
console.log(ano);

//PEGAR O MÊS ATUAL - DE 0 ATÉ 11 SENDO 0 (JANEIRO) E 11 (DEZEMBRO)
let mes = data.getMonth();
console.log(mes);

const mesesDoAno = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];