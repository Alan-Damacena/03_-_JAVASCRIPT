function criaPromessa(){

    return new Promise(
        (resolve) => {
            let a = 50
            let b = 100

            console.log("01º Resultado da promessa: ", a + b)

            resolve(a + b)

        }
    )
}

const dobro = async function(){

    const valor = await criaPromessa()

   setTimeout(
       function(){
       console.log("02º Resultado do triplo da promessa: ", valor * 2)
   },
   4000
   )

   await triplo()
}

const triplo = async () => {

    const valor = await criaPromessa()

    console.log("03º Resultado do triplo da promessa: ", valor * 3)

}

//Essa é a primeira função que será chamada, e a partir da referencia das funções sobre outras funções (inlcuindo mesclagem de funções assincronas) serão chamadas as outras funções
dobro()
