// Crie uma função "getAdmins" que recebe um Map;
// Crie um Map e popule-o com nomes de usuários e seus papéis no sistema (Ex: "Luiz" => "Admin")
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores

//CRIANDO O MAP
const usuarios = new Map();

//SET está adicionando
usuarios.set('Luiz', 'Admin');
usuarios.set('Alan', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Pedro', 'Admin');

function getAdmins(map) {

    let admins = [];

    // KEY(chave) VALUE(valor)
    for([key, value] of map) {
        if (value === 'Admin'){
            admins.push(key) //PUSH: adiciona valores a uma array, ou seja, na let admins será adicionado o nome da pessoa que tiver com o valor "Admin"
        }
    }

    return admins; //caso a condição seja falsa, ele retorna a variável let admins

}



console.log(getAdmins(usuarios))