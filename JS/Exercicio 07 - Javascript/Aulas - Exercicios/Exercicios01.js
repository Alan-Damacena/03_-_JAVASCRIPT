// Criar um verificador de idade dizendo se pode ou não dirigir (maior ou igual a 18)
let idade = 18
idade >= 18 ? console.log("Pode dirigir") : console.log("Não pode dirigir")


//Criar um verificados de idade que diz a faixa etária de acordo com a seguinte definição:
// - Menor que 12, imprime "criança"
// - Entre 12 e 18, imprime "adolescente"
// - Entre 18 e 65, imprime "Adulto"
// - Maior que 65, imprime "Idoso"

let idadeEtaria = 65
if (idadeEtaria < 12){
    
    console.log("Criança")

} else if (idadeEtaria >=12 && idadeEtaria <18){

    console.log("Adolescente")

} else if(idadeEtaria >=18 && idadeEtaria <65){

    console.log("Adulto")

} else{

    console.log("Idoso")

}

//Criar um menu de opções de serviços de streaming, imprimindo o nome do serviço escolhido, sendo as opções:
// "A" para Amazon Prime;
// "N" para Netflix;
// "H" para HBO Max;
// "D" para Disney Plus.

var amazonPrime = "Amazon é MUITO BOM"

var netflix = {
    nome: "Netflix",
    mensalidade: 25.00
}

var hboMax = {
    nome: "Hbo Max",
    mensalidade: 25.00
}

var disneyPlus = {
    nome: "Disney Plus",
    mensalidade: 32.00
}

var op = "A"

    switch(op){

        case "A":
            console.log(amazonPrime)
            break;

        
        case "N":
            console.log(netflix)
            break;
        
        case "H":
            console.log(hboMax)
            break;
     
        case "D":
            console.log(disneyPlus)
            break;
              
        default:
            console.log("Opção Inválida")
            break;
    }

// PASSO A PASSO:
// Crio as variaveis dos streamings;
// Crio a var onde será armazenada a opção;
// Crio o switch