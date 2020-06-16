const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//2.1
const idades = usuarios.map(({idade}) => idade);
console.log(idades);

// //2.2
const usersRocketSeat18 = usuarios.filter(({empresa, idade}) => empresa == 'Rocketseat' && idade > 18);
console.log(usersRocketSeat18);


// //2.3
const usersGoogle = usuarios.find(({empresa}) => empresa == 'Google');
console.log(usersGoogle);


// //2.4
const usersDobroMenor50 = usuarios.map( usuario => ({...usuario, idade: usuario.idade * 2}) )
.filter(({idade}) => idade <= 50)
console.log(usersDobroMenor50);
