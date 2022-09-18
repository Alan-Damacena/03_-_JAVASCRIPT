let x = 100
try {

    if(x <= 100){
        console.log("Número Valido")
    } else{

        //Criando e lançando um objeto do tipo Error
        throw{
            "name": "NumeroInvalido",
            "message": "Qualquer número maior que 100 é Inválido"
        }
    }
    
} catch (error) {
    console.log(error)
}