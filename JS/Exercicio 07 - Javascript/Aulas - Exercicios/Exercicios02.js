//CRIE UMA FUNÇÃO QUE RECEBE DOIS NÚMEROS COMO PARÂMETROS E CONFIRA SE OS NÚMEROS SÃO IGUAIS
function comparaNumeros(numero1, numero2){

    const saoIguais = numero1 === numero2;

//CONFIRA SE A SOMA DOS NÚMEROS É MAIOR QUE 10 OU MENOR QUE 20

    const soma = numero1 + numero2;

    if(saoIguais){

        if( soma > 10 && soma < 20){

            console.log("Os números", numero1, "e", numero2, "são iguais. Sua soma é", soma, "que é maior que 10 e menor que 20")

        } else{

            console.log("Os números", numero1, "e", numero2, "são iguais. Sua soma é", soma)
        }
        
        
    }

    else {

        if( soma > 10 && soma < 20){

            console.log("Os números", numero1, "e", numero2, "NÃO são iguais. Sua soma é", soma, "que é maior que 10 e menor que 20")

        } else{

            console.log("Os números", numero1, "e", numero2, "NÃO são iguais. Sua soma é", soma)
        }
    
    }

}

comparaNumeros(1,10)
