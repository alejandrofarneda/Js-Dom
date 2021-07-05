/**
 * * # Ejercicio 4
 * * Escribe una función que, al recibir un array como parámetro, elimine los strings
 * * repetidos del mismo. No se permite hacer uso de Set ni Array.from().
 * */

import { rmvRepeat } from '../Helpers/helpers.js';

const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const body = document.querySelector('body');
const ul = document.querySelector('ul');

const callNames = function () {
    let h2 = document.createElement('h2');
    h2.textContent = `Non repeated Names:`;
    body.prepend(h2);
    for (let chars of names.filter(rmvRepeat)) {
        let li = document.createElement('li');
        //* Una Funcion bastante sencilla de comprender, que nunca se me habría ocurrido.
        // Ó bien = names.filter((value, index) => (names.indexOf(value) === index));
        li.textContent = chars;
        ul.append(li);
    }
};

callNames();
