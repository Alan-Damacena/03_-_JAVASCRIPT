console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
// console.log(6)

    //Ocorreu uma execução de forma ASSÍNCRONA, ou seja, essa função operou de forma independente dos outros consoles.logs
    setTimeout(() => {

        console.log(6)
        
    }, 2000) //2000 é o tempo de espera de execução, no caso 2000 milésimos de segundos (2 SEGUNDOS)

console.log(7)
console.log(8)
console.log(9)
console.log(10)
