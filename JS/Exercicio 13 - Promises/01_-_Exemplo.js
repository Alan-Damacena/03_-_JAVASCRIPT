//Criando um novo objeto da classe Promise e atribuindo ao valor da variável "const teste"
const teste = new Promise((resolve, rejeita) => {
                          //Parâmetros para a criação do objeto Promise
    
        //Aqui é a promessa de que será enviada essa mensagem depois de 3 segundos
        setTimeout(
        
        () => resolve("Promise Resolvida"),
        3000 //3000 milissegundos (3 segundos)
    
        )

    })

    //Se deu certo, será chamada essa função
    //Em caso de acerto uso o then
    teste.then(

        //Dentro da variável criada (RES) será aplicada a mensagem do console.log
        (res => {
            
            console.log("RESULTADO: ",res)
        
        }) 

    )

