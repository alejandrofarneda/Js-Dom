/* *
 * * Ejercicio 5
 * * Consigue una lista con los nombres de los personajes de la serie Rick and Morty que aparecen
 * * en los episodios lanzados en el mes de enero (el año no importa).
 * * Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'
 * */

import { rmvRepeat } from '../Helpers/helpers.js';
const body = document.querySelector('body');
const ul = document.querySelector('.ul');

const getCharsFromMonthEps = async (String) => {
    try {
        const charsNamesRpt = [];
        const response = await fetch(`https://rickandmortyapi.com/api/episode`);
        const { results } = await response.json();
        const janEps = Array.from(results).filter((episodio) =>
            episodio.air_date.includes(String)
        );

        const charsOfEps = janEps[0].characters
            .concat(janEps[1].characters)
            .concat(janEps[2].characters);
        for (const chars of charsOfEps) {
            try {
                const response = await fetch(`${chars}`);
                const { name } = await response.json();
                charsNamesRpt.push(name);
            } catch (error) {
                console.log(error);
            }
        }
        const charsNames = charsNamesRpt.filter(rmvRepeat);
        //Ó bien: const charsNames = charsNamesRpt.filter((a, x, y) => y.indexOf(a) === x);
        confirm(charsNames[1] + ': o jeez Rick, this seems dangerous');
        alert(charsNames[0] + ': SHUT THE **** UP MORTY');

        for (let chars of charsNames) {
            let li = document.createElement('li');
            li.textContent = chars;
            ul.append(li);
        }
    } catch (error) {
        console.log(error);
    }
    return String;
};

const titulo = function (String) {
    let h2 = document.createElement('h2');
    h2.textContent = `Characters from ${String} Episodes`;
    body.prepend(h2);
};

// Estuve atendiendo a cuestiones de Backend en donde una funcion llama a la otra que se ejecuta a continuacion, pero utilizando
// lo que retorna de la primera como parametro para la segunda. 
// Quise lograr que mi titulo se imprima despues de resolverse la funcion de los personajes. 
// y Si bien lo he conseguido... 
// TODO Quisiera aprender a utilizar el return de una funcion como parametro de la que se llama 
// TODO a continuacion....  Pregunta para David. 

let test = 0;
test = (await getCharsFromMonthEps('January')).then(titulo('January'));
    


// getCharsFromMonthEps('January', (callback) => {
//     let h2 = document.createElement('h2');
//     h2.textContent = `Characters from ${getCharsFromMonthEps} Episodes`;
//     body.prepend(h2);
// });
//Error: 
// * Uncaught TypeError: (intermediate value).then is not a function
// *    at test.js:59
// * (anonymous) @ test.js:59

