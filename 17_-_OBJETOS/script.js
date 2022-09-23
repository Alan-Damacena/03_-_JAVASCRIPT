/* OBJETOS

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades. 

Objetos também podem ter métodos.

Um Método é uma função colocada dentro de uma propriedade.

*/

//É UMA PRATRICA COMUM USAR A CONST PARA NÃO MUDAR O CONTEÚDO DE UM OBJETO
//OBJETO LITERAL: ONDE OS VALORES JÁ SÃO DETERMINADOS PARA ELE
const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2022,
    placa: "ABC-1234",

    //Criando métodos (funções dentro de uma propriedade)
    completo: function(){ 
        alert("A marca é " + this.marca + " e o modelo é: " + this.modelo);
    },

    descricao: function(){
        return "o ano do carro é " + this.ano
    }


};

carro.completo()

console.log(carro.descricao());




