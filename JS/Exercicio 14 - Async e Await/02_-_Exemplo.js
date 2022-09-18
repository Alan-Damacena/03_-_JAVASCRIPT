//Função que faz a criação da promessa
function promessa() {

    //retorno da promessa criada
    return new Promise(

        //método que retorna o valor em caso de sucesso
        resolve => {
            setTimeout(    
                
                //passagem de um valor como parâmetro do método resolve
                () => resolve(10),

                //delay de 3 segundos para retornar
                3000           
            )                  
        })

    }


//função que retorna a soma de um valor obtido de uma função de multiplicação
const soma = async () => {

    //variável que recebe o retorno da função de muktiplicação
    const valor = await multiplica()

    console.log("1º - Dentro da função soma")

    //retorna o valor somado a 3
    return valor + 3

}

//função que retorna um valor recebido da promessa multiplicado por m33
const multiplica = async () => {

    //variável que recebe o valor retornado pela promessa
    const valor = await promessa()

    console.log("2º - Dentro da função multiplicação")

    //retorno do valor multiplicado por três
    return valor * 3
    
}

//chamada da função de soma
soma().then(
    
    //função que recebe o resultado da soma e o apresenta
    function (resultado){

        console.log("3º - Chamando a função soma")
        console.log(resultado)
    }

)