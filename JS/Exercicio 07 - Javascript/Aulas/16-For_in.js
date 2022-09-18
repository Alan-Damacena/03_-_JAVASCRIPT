//ESTRUTURA DO FOR IN
//variável "carro" do tipo OBJETO possui as propriedades de "marca", "modelo" e "cor"
let carro = {
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata'
}
//obtendo o nome das propriedades
for (propriedade in carro) {
    console.log(propriedade);
    //resultado "marca", "modelo" e "cor"
    }

for (propriedade in carro) {
    console.log(carro[propriedade]);
    //resultado "ford", "fiest" e "prata"
    }

for (propriedade in carro) {
    console.log(propriedade, ":", carro[propriedade]);
    //marca : ford - modelo: fiesta - cor : prata
    }

for (propriedade in carro) {
    console.log(carro.cor)
    //nome de uma determinada propriedade
}