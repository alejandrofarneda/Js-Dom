/* *
 * * # Ejercicio 3
 * * Crea un programa que reciba un número en decimal o binario y devuelva la conversión:
 * * -   Si le pasamos un nº en decimal debe retornar la conversión a binario.
 * * -   Si le pasamos un nº en binario deberá devolver su equivalente decimal.
 * * Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).
 * * No se permite utilizar el método parseInt().
 */

import { binTodecimal } from '../Helpers/helpers.js';

const converter = () => {
    let num = Number(prompt('Dame un numero'));
    if (isNaN(num)) {
        alert('Solo Numeros');
        return;
    }      
    let base = Number(
        prompt( 
            'Digita 10 para convertir tu numero a Binario                          Digita 2 para convertir tu numero a Decimal'
        )
    );      
    if (base === 10) {
        alert(num.toString(2));
    } else if (base === 2) {
        alert(binTodecimal(num));
    } else if (base !== 2 && base !== 10) {
        alert('Las opciones son 10 o 2');
    }

    // Restaría solucionar que quieran convertir numeros decimales con base 2
    // Lo dejaremos al buen uso del usuario... Por ésta vez. 
 };

setInterval(() => {
    converter();
}, 1000);
