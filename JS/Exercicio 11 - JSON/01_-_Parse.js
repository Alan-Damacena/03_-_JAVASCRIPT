//Faz em aspas simples para não ocorrer conflitos
//JSON se faz numa linha só
//Nesse exemplo estou fazendo uma string json
let pessoa = '{"nome": "Alan","idade": 32}'

console.log('Tipo de dado:', typeof(pessoa))

//Processando um dado JSON e o transformando em um OBJETO
let pessoa_obj = JSON.parse(pessoa)

console.log('Tipo de dado:', typeof(pessoa_obj))

console.log("Propriedade do objeto: ", pessoa_obj.nome)
