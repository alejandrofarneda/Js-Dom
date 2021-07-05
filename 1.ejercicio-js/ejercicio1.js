/**
 * * # Ejercicio 1
 * * Escribe una función que devuelva un array de usuarios. De cada usuario guardaremos el username, 
 * * el nombre y apellido, el sexo, el país, el email y un enlace a su foto de perfil.
 * * El número de usuarios a obtener se debe indicar con un parámetro de dicha función.
 * * Sírvete de la API: https://randomuser.me/
 **/

const body = document.querySelector('body');
const ul = document.querySelector('.ul');

const getUsers = async (number) => {

    let h2 = document.createElement('h2');
    h2.textContent = `Datos de Usuarios`;
    body.prepend(h2);

    try {
        const response = await fetch(`https://randomuser.me/api/?results=${number}`);

        const { results } = await response.json();
        let usersArray = [];

        for (const user of results) {
            let users = [];
            const username = user.login.username;
            const { first, last } = user.name;
            const sexo = user.gender;
            const pais = user.location.country;
            const email = user.email;
            const picture = user.picture.large;
            users.push(username, first, last, sexo, pais, email, picture);
            usersArray.push(users);
        }
        for (let chars of usersArray) {
            let li = document.createElement('li');
            li.textContent = chars;
            ul.append(li);
        }
        
    } catch (error) {
        console.log(error);
    }
};

getUsers(20);


