//DECLARANDO UM OBJETO
let object = {

    string: "string",
    number: 3,
    boolean: true,
    array: ['array'],
    objetoInterno: {objetoInterno: 'objeto interno'}
}

console.log(object)

//ACESSANDO UMA PROPRIEDADE DENTRO DO OBJETO
console.log(object.boolean)

//DECLARANDO UMA VARIÁVEL DE UMA PROPRIEDADE DO OBJETO
var teste = object.number
console.log(teste)