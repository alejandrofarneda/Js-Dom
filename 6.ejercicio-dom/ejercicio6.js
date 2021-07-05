/* *
 * * # Ejercicio 6:
 * *
 * * Subraya (manipulando el DOM) todas las palabras de los párrafos en
 * * "ejercicio.html" que contengan más de 5 letras.
 * */


import { toUnderline } from '../Helpers/helpers.js';

//Obtengo los parrafos:
let pFirst = document.querySelector('body :nth-child(1)');
let pSec = document.querySelector('body :nth-child(2)');
let pThird = document.querySelector('body :nth-child(3)');

let parHtm1 = pFirst.innerHTML;//Separo el InnerHTML de mi parrafo en una variable. 
let parArr1 = parHtm1.split(/[\s,\.,\"]+/);
// Obtuve ayuda para llegar a ésto, Y luego me pude valer de una pagina llamada https://regex101.com/
// para comprender a qué se refieren los cáracteres. /[\s,\.,\"]+/   
// \s, todas los espacios vacíos y las comas o ambas juntas. 
// \., todas los puntos y comas del texto.
// \" todas las comillas del texto. 
// + hace que se repita luego de encontrar cualquier similitud, asi nos aseguramos de recorrer todo el texto. 

parArr1.forEach((wrd) => {
    if (wrd.length > 5) {
        parHtm1 = parHtm1.split(wrd).join(`<u>${wrd}</u>`);
        //recorremos el array parArr con todas las letras ya sin espacios ni comas,
        //si la palabra contiene mas de 5 caracteres, la utilizamos para declararla como
        //parametro del split de parHtm, y automaticamente la volvermos a unir como texto subrayado
        //`<u>${wrd}</u>`.
    }
});
pFirst.innerHTML = parHtm1;
//Finalmente declaramos que el innerHtml del tercer parrafo(p)
//es igual a nuestro parrafo armado con las palabras subrayadas.


//Aqui la funcion resumida unicada en helpers.js
toUnderline(pSec);

toUnderline(pThird);


