/*# Ejercicio 7

Crea una malla de cuadrados de tal forma que el color de cada uno de ellos se determine de forma aleatoria y vaya cambiando cada segundo.
![Ejemlo](exemplo.png)
Añade también un botón que permita añadir un nuevo cuadrado a la maya con las mismas propiedades que los anteriores.*/

import { changeColors } from '../Helpers/helpers.js';

const body = document.querySelector('body');

body.innerHTML = `


    <button class="add">Add Square</button>    
    <div class="grid"> 
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div>
        <div class='a'></div> 
        <div class='a'></div> 
        <div class='a'></div> 
        <div class='a'></div>      
    </div>
    <button class="remove">Rmv Square</button>
    <div class= things> 
    <a href="https://github.com/alejandrofarneda" target="_blank">
        <img src="./forkme_right_darkblue_121621.png" class="corner" alt="Fork me on GitHub">
    </a>
    <footer class='footer'> RandomSquareRoom • copyright © 2021 
    <a href="https://github.com/alejandrofarneda" target="_blank"> ale farneda</a> • original idea by 
    <a href="https://hackaboss.com/" class='hab' target="_blank"> Hack-a-Boss </a></footer>
    </div>
`;
body.style = `
    display: block;
    height: 100%;
    width: 100%;
    min-width: 100vh;
    min-height: 100vh;
    padding: 0;
    margin: 0;    
    background-image: url("./background.png");
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: repeat;
    background-repeat-y: repeat;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    
`;
let divGrid = document.querySelector('.grid');
divGrid.style = `
    
    margin: 0 auto 0 auto;
    width: 90vh;
    min-width: 45vh; 
    gap: 0.25vh;   
    min-height: 70vh;
    display: grid;    
    grid-template-columns: auto auto auto auto ;
    grid-template-rows: auto auto auto auto;    
`;

let addButton = document.querySelector('.add');

addButton.style = `
    margin: 2.5vw auto 0 auto;
    border: none;
    height: 5.5vh;
    width: 90vh;
    min-width: 45vh;
    font-family: Monospace;
    font-size: 3.5vh;     
    margin-bottom:0.5rem;
    display: block;   
    box-shadow: inset 0 0 5px black;
    
`;
const delButton = document.querySelector('.remove');
delButton.style = `
    margin: 20px auto 0 auto;
    border: none;
    height: 5.5vh;
    width: 90vh;
    min-width: 45vh;
    font-family: Monospace;    
    font-size: 3.5vh;    
    margin-top:0.5rem;  
    display: block;
    box-shadow: inset 0 0 5px black;
    
`;
const raton = document.querySelector('.corner');

raton.style = `
    height: 20vh;    
    position: absolute;
    text-align: right;
    top: 0;
    right: 0;
    border: 0;
`;
const footer = document.querySelector('.footer');

footer.style = `
    display: block;
    color: #b4b4b4;
    text-align: center;
    margin: 15px auto 30px auto;
    font-family: Verdana, "DejaVu Sans", sans-serif;
    font-weight: normal;
    font-size: 2vh;
    line-height: 1.8;
`;
const footerA = document.querySelector('.footer > a');

footerA.style = `
    color: #b4b4b4;
    text-decoration: none;
`;
const hab = document.querySelector('.hab');
hab.style = `
    color: #b4b4b4;
    text-decoration: none;
`;

//* Me terminé copando con el html y css demasiado, aquí el código:

const divsOfGrid = divGrid.querySelectorAll('.a');

changeColors(divsOfGrid);

const handleAddClick = (e) => {
    const { target } = e;
    if (target.matches('.add')) {
        const div = document.createElement('div');
        div.classList.add('a');
        divGrid.append(div);
    }
};

addButton.addEventListener('click', handleAddClick);

const handleRmvClick = (e) => {
    const { target } = e;
    if (target.matches('.remove')) {
        divGrid.lastElementChild.remove();
    }
};
delButton.addEventListener('click', handleRmvClick);

setInterval(function () {
    let divItem = divGrid.querySelectorAll('.a');
    changeColors(divItem);
}, 483);

//Quisiera lograr ésto para eliminar el elemento de la esquina cuando achico la pantalla: 

// const things = document.querySelector('.things');
// console.log(things);
// const rmvCorner = function () {
//     if (window.innerWidth < 500) {
//         raton.classList.remove('.corner');
//     }
// };
// body.addEventListener('resize', rmvCorner());
