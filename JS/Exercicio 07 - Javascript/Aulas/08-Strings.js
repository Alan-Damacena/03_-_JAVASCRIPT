let nome = 'Alan';
let sobrenome = 'Felipe';

// Uso do concatenar com duas variaveis
console.log(nome.concat(sobrenome))

// Uso do concatenar com duas variaveis + contagem da quantidade de caracteres
console.log(nome.concat(sobrenome).length)

// Uso do [] para saber em qual posição esta determinado caractere
console.log(nome[0])
console.log(nome[1])
console.log(nome[2])
console.log(nome[3])

// Uso do espaço
console.log(nome, "", sobrenome)

// Uso do espaço - NOVO JEITO DE FAZER (uso da crase)
console.log(`${nome} ${sobrenome}`)

// Quebra de Linha
console.log(nome,"\n",sobrenome)

// Quebra de Linha - NOVO JEITO DE FAZER (uso da crase)
console.log(`${nome} 

${sobrenome}`)

//Imprimindo o valor de ASPAS - devo colocar a barra
console.log("\"")

//Separando as letras da variável
console.log(nome.split(""))

//Com o espaço dentro da split, ele separa só as palavras com espaço
console.log(nome.split(" "))

//Verificar se tem determinado nome incluido
console.log(nome.includes("Alan"))

//Começam com ....?
console.log(sobrenome.startsWith("F"))

//Termina com ....?
console.log(sobrenome.endsWith("e"))

//Trocar um caracter pelo outro
console.log(nome.replace("A", "BBB"))