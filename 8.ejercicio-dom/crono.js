/*# Ejercicio 8

Crea un cronómetro que permita ponerlo en marcha, pararlo y resetearlo.*/

// Llamo a mi funcion que agrega un cero por delante del digito.
import { dobleZero } from '../Helpers/helpers.js';

// Declaro todas mis constantes a usar:
// - Set serivrá unicamente para llamar al setInterval y clearInterval.
// - Start servirá como referencia del tiempo que pasa segun las acciones.

let set = 0;
let start = 0;
let p = document.querySelector('.p');
const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const lap = document.querySelector('.lap');
const takeLap = document.querySelector('.takeLap');

// Declaro la funcion manejadora del click Start
const handleStart = function () {
    if (start === 0) {
        start = +new Date();
        // La Funcion Go es un extracto del ejercicio 2, con milisegundos.
        // Basicamente toma valores de start si es 0, declara una nueva fecha y trabajo sobre
        // los segundos de diferencia.
        // el modulo 60 (Second %60) servirá unicamente para lograr que cuando llegue a sesenta,
        // vuelva a 0 lo que se muestra.
        const go = function () {
            const now = +new Date();
            const dif = now - start;
            const second = Math.floor(dif / 1000);
            let hours = Math.floor(second / 3600);
            let minutes = dobleZero(Math.floor((second / 60) % 60));
            let seconds = dobleZero(second % 60);
            let mils = Math.floor((dif / 10) % 100);
            let pauseTime = `${hours}:${minutes}:${seconds}:${mils
                .toString()
                .substr(0, 1)}`;
            p.textContent = pauseTime;
        };
        // Llamo a la funcion dentro de un setInterval, para que me muestre los valores por pantalla
        // cada fraccion de tiempo en milisegundos.
        set = setInterval(go, 100);
    } else {
        // si Start no es cero entonces no declaro uno nuevo, continúo con el valor
        // que tomó del if anterior al darle play por primera vez.
        // Aquí he optado por volver a declarar toda la funcion ya que tuve problemas
        // ¿"Async"? al intentar de importarla desde helpers.js, queda horrible pero bue.
        const go = function () {
            const now = +new Date();
            const dif = now - start;
            const second = Math.floor(dif / 1000);
            let hours = Math.floor(second / 3600);
            let minutes = dobleZero(Math.floor((second / 60) % 60));
            let seconds = dobleZero(second % 60);
            let mils = Math.floor((dif / 10) % 100);
            let pauseTime = `${hours}:${minutes}:${seconds}:${mils
                .toString()
                .substr(0, 1)}`;
            p.textContent = pauseTime;
        };
        // Marco un clearInterval ya que de lo contrario si alguien pulsara
        // por equivocacion start dos veces, aceleraría la cuenta (estaría
        // realizando un interval de un interval)
        clearInterval(set);
        // Y automaticamente otro interval que siga imprimiendo los numeros.
        set = setInterval(go, 100);
    }
};

// Handle Stop simplemente cumple su funcion, frena el crono para poder ver un tiempo fijo,
// pero el tiempo seguirá corriendo por dertás como en cualquier cronómetro.
const handleStop = function () {
    clearInterval(set);
};

//Reset para volver todo a cero y vaciar los tiempos guardados en Lap.
const handleReset = function () {
    clearInterval(set);
    p.textContent = '0:00:00:0';
    start = 0;
    lap.innerHTML = '';
};

//TakeLap salva cada "vuelta" y nos la muestra por pantalla.
const handleTakeLap = function () {
    let li = document.createElement('li');
    li.classList.add('.li');
    li.textContent = p.textContent;
    lap.append(li);
};

play.addEventListener('click', handleStart);
stop.addEventListener('click', handleStop);
reset.addEventListener('click', handleReset);
takeLap.addEventListener('click', handleTakeLap);

//Varios errores en mi Css:

const body = document.querySelector('body');
body.style = `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url("./9YKVj.jpg");
    background-repeat: no-repeat;
    background-cover: cover;
    `;

const all = document.querySelector('.all');

all.style = `
display: flex;
flex-direction: column;
`;

p.style = `
    margin-top: 10rem;
    font-size: 9vw;
    font-family: 'Orbitron', sans-serif;
    text-shadow: #B1B3BE 0.1em 0.1em 0.3em;
    letter-spacing: -8px;

`;

const buttons = document.querySelector('.buttons');

buttons.style = `
   
    text-align: center;
   

`;

play.style = `
    height: 3vw;
    width: 9vw;
    font-size: 2vw;
    text-shadow: black 0.1em 0.1em 1.5em;
    border-radius: 5px;
    background: #383836;
    font-family: 'Play', sans-serif;
    outline: none;

`;
takeLap.style = `
   height: 3vw;
    width: 9vw;
    font-size: 2vw;
    text-shadow: black 0.1em 0.1em 1.5em;
    border-radius: 5px;
    background: #383836;
    font-family: 'Play', sans-serif;
    outline: none;
`;
stop.style = `
    height: 3vw;
    width: 9vw;
    font-size: 2vw;
    text-shadow: black 0.1em 0.1em 1.5em;
    border-radius: 5px;
    background: #383836;
    font-family: 'Play', sans-serif;
    outline: none;
`;
reset.style = `
    height: 3vw;
    width: 9vw;
    font-size: 2vw;
    text-shadow: black 0.1em 0.1em 1.5em;
    margin-right: 0.1vw;
    border-radius: 5px;
    background: #383836;
    font-family: 'Play', sans-serif;
    outline: none;
`;
const lapDiv = document.querySelector('.lapDiv');

lapDiv.style = `
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 3rem;
    flex-wrap: wrap; 
    font-size: 1.5vw;    
    font-weight: bold;
    font-family: 'Play',sans-serif;
    color: black;
    text-shadow: #B1B3BE 0.1em 0.1em 0.2em;

`;

lap.style = `
    max-height: 20rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: '-T: ';
    column-gap: 3vw;
    row-gap: 0.5vw;

`;

const raton = document.querySelector('.corner');
raton.style = `
    height: 10vw;
    position: absolute;
    text-align: right;
    top: 0;
    right: 0;
    border: 0;

`;

const footer = document.querySelector('.footer');

footer.style = `
    position: absolute;
    bottom: 2rem;
    display: block;
    color: #b4b4b4;
    text-align: center;

    font-family: Verdana, "DejaVu Sans", sans-serif;
    font-weight: normal;
    font-size: 2vh;
    line-height: 1.8;
    color: black;
    text-shadow: #B1B3BE 0.1em 0.1em 0.2em;
`;
const footerA = document.querySelector('.footer > a');

footerA.style = `
    color: black;
    text-shadow: #B1B3BE 0.1em 0.1em 0.2em;
`;
const hab = document.querySelector('.hab');
hab.style = `
    color: black;
    text-shadow: #B1B3BE 0.1em 0.1em 0.2em;
`;
