var carro = {
    "marca": "chevrolet",
    "modelo": "opala",
    "consumo": "1km/l",
    "cor": "preto"
}

for(let propriedade in carro){

    console.log(propriedade + ":" + carro[propriedade])

}