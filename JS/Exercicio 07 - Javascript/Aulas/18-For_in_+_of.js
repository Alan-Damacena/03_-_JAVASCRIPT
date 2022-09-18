//FOR OF + FOR IN
let carrosObjetos = [ {
                        marca: '1',
                        modelo: '1',
                        cor: 'preto'
                        },

                    {
                        marca: '2',
                        modelo: '2',
                        cor: 'roxo'
                        },

                    {
                        marca: '3',
                        modelo: '3',
                        cor: 'azul'
                        }

                    ]

    // of - puxou a array de objetos
    for (let carro of carrosObjetos) {

                                        //a propriedade puxou o nome da propriedade
                                        for (propriedade in carro) {

                                            //nome da propriedade + : + o nome da propriedade
                                            console.log(propriedade + ':' + carro[propriedade]);

                                        }
                                    }
