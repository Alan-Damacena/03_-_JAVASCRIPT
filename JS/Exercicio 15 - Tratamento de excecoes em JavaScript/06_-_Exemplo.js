let frutas = ["banana", "maçã", "uva"];

try{
    if(!frutas.includes("melancia")){
        throw "FRUTA NÃO ENCONTRADA"
    }
} catch(error) {
        console.log(error)
    }
