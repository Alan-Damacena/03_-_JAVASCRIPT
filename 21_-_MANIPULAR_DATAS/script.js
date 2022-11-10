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

//MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

//PEGAR O DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

//PEGAR O DIA DA SEMANA - 0 até 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let diasSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diasSemanaEscrito);

//PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);