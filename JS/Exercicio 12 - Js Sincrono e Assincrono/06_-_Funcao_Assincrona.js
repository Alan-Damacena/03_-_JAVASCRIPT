async function somar (n1,n2){

    return n1 + n3;

}

somar(2,4).then(

    resultado => {
        console.log("Resultado: ", resultado)
    }
    
    //.catch para tratar erros
).catch((erro) => {

    console.log("ALAN, ERRO AQUI!!!",erro)

  //.finally finaliza independente do erro
}).finally(() => 

    console.log("Encerrando")   

)