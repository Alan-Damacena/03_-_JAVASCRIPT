//COMO DECLARAR UMA ARRAY
//ARRAY PODE GUARDAR VÁRIOS TIPOS DE DADOS
let array = ['string', 1, true]
console.log(array)


//ACESSANDO UM ÍNDICE DE UM ARRAY
let lista = ['string', 1, true]
console.log(lista[0])
console.log(lista[1])
console.log(lista[2])

//ADICIONANDO UM NOVO ITEM NO FINAL DA ARRAY
lista.push([])
console.log(lista)

//REMOVENDO UM ITEM NO FINAL DA ARRAY
lista.pop()
console.log(lista)

//ADICIONANDO UM NOVO ITEM NO INÍCIO DA ARRAY
lista.unshift([])
console.log(lista)

//REMOVENDO UM ITEM NO INÍCIO DA ARRAY
lista.shift()
console.log(lista)

//DESCOBRINDO A POSIÇÃO DE UM ELEMENTO DA ARRAY
console.log(lista.indexOf(true))

//REMOVENDO OU SUBSTITUINDO UM ITEM PELO INDICE
lista.splice(0, 2);
console.log(lista)

//RETORNANDO UMA PARTE DE UMA ARRAY JÁ EXISTENTE
let novaLista = lista.slice(0, 3)
console.log(novaLista)
