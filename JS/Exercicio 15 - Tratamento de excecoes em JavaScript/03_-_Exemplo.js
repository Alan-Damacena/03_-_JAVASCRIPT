let x;

x = 12;

try{

    if(x <= 10){

        console.log("Número aceito")

    }else{

        throw "ERRO, NÚMERO NÃO ACEITO"

    }

    
}catch(erro){

    console.log(erro)

}