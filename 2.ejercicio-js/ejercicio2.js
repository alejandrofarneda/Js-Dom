/** 
 * * # Ejercicio 2
 * * Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo. 
 * * Formatea el tiempo para que se muestren los segundos, los minutos, 
 * * las horas y los días desde la ejecución. 
 **/

import { dobleZero } from '../Helpers/helpers.js';

const start = +new Date();
const horaInicio = new Date();
let set = 0;

function secondsToString() {
    const now = +new Date();
    const dif = now - start;
    const second = Math.floor(dif / 1000);
    let day = Math.floor(second / 86400);
    let hour = dobleZero(Math.floor(second / 3600));
    let minute = dobleZero(Math.floor((second / 60) % 60));
    let seconds = dobleZero(second % 60);
    let set =
        'Han pasado ' +
        day +
        ' Dias ' +
        hour +
        ' Horas ' +
        minute +
        ' Minutos y ' +
        seconds +
        ' Segundos desde el ' +
        `${horaInicio.getDate()} de ${horaInicio.toLocaleDateString('es-ES', {
            month: 'long',
        })} a las ${dobleZero(horaInicio.getHours()) +
    ':' +
    dobleZero(horaInicio.getUTCMinutes()) +
    ':' +
    dobleZero(horaInicio.getUTCSeconds())}.`;
    let h2 = document.querySelector('.timer');
    h2.textContent = `${set}`;    
}
secondsToString()
set = setInterval(secondsToString, 5000);
