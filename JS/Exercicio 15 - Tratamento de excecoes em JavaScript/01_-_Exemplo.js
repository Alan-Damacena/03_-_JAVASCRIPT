let a = 0;
let b = 1;

//Tenta executar um bloco de código
try{

    //Variável "c" não existe
    console.log(a + c);
    
//captura o erro  
}catch(e){ //e: parâmetro com um objeto do tipo Error

    console.log("ALAN, DEU ERRO: " + e)

}