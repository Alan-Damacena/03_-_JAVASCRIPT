//ESTRUTURA DO FOR ... OF
let carros = [ 'fiesta', 'onix', 'fusca', 'saveiro'];

//na let = carro, serão buscados os itens da let carros
for (let carro of carros){
    console.log(carro);
    
}   //fiesta, onix, fusca, saveiro

console.log("\n");

//FOR ... OF - exemplo 02 - ARRAY COM OBJETOS
let carrosObjetos = [ {
                        marca: '1',
                        modelo: '1',
                        cor: 'preto'
                        },

                     {
                        marca: '2',
                        modelo: '2',
                        cor: 'roxo'
                        },

                     {
                        marca: '3',
                        modelo: '3',
                        cor: 'azul'
                        }

                    ]

//na let = carro, serão buscados os itens da let carrosObjetos
for (let carro of carrosObjetos){
    console.log(carro);
    //RESPOSTA:
    // { marca: '1', modelo: '1', cor: '1' }
    // { marca: '2', modelo: '2', cor: '2' }
    // { marca: '3', modelo: '3', cor: '3' }
}

console.log("\n");

//Usando o entries (para descobrir o índice da array
for (let carro of carrosObjetos.entries()) {
    console.log(carro);
}

console.log("\n");

for(let index = 0; index < carrosObjetos.length; index ++) {
    const carro = carrosObjetos[index];
    console.log(carro)
}

console.log("\n");

//SEPARANDO POR CARACTER
let frase = "ALAN FELIPE"
for (let separado of frase){
    console.log(separado)
}

