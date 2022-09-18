new Promise((resolve, rejeita) => {

    let a = 10;
    let b = 20;

    resolve(a + c)

}).then(res => {
    
    console.log("RESULTADO: ",res)
    
}).catch(()=> {//Para tratar os erros

    console.log("Erro")

}).finally(()=> {//Finaliza mesmo se tiver erros

    console.log("ALAN, TEMOS UM ERRRRROOOOOOOO")

})