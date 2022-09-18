//FUNÇÃO ANÔNIMA: variável que pode armazenar uma função
const soma = function (a,b) {
    return a + b;
}

console.log(soma(1,2))

    console.log(soma("\n"))

//FUNÇÃO AUTOINVOCÁVEL: feira em parenteses, chamada por outra em parentes
(
    function() {

        let name = "Digital Innovation One";
        return name;
    }
)()

//função autoinvocável dentro de uma variável
const soma1 = (
                function() {
                            return a + b;
                            }
              )(1,2);

            console.log((soma1))



