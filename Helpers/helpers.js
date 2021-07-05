

// La función recibe un string 'bin', luego crea un Array aplicando 'split',
// en este caso el separador es numero del string.

// Lo siguiente que hace es invertir el Array obtenido para simular lectura de derecha a izquierda,
// ya que así se hace la conversión a lápiz y papel, con 'reverse'.

// Con 'reduce' empieza a extraer cada elemento del array, además le pasa una función como parámetro,
// ésta ultima debe tener parámetros:

// Total = acc
// Valor extraído = value
// Índice del elemento extraído = index
// En este caso  ocupas 'function(acc, value, index)'.
// Repasando, 'acc' será total, 'value' el elemento extraído, 'index' su índice.

function binTodecimal(num) {
    let bin = num.toString();    
    return bin
        .split('')
        .reverse()
        .reduce(function (acc, value, index) {
            if (value === '1') {
                return acc + Math.pow(2, index);
            } else {
                return acc;
            }
        }, 0);
}

//-----------------------------------------------------------//

//* La funcion itera de index en index dentro del array(self) para saber
//* si cada value es el primero dentro del mismo=(true) o está repetido=(false).
//* Si llamamos a esta funcion mediante un callback de filter, dejará pasar solamente
//* a los "true-values" y tendremos nuestra lista de los mismos no repedidos.

function rmvRepeat(value, index, self) {
    return self.indexOf(value) === index;
    //? console.log(value); // A-Jay, etc
    //? console.log(index); // 0, 1, etc
    //? console.log(self); // El array completo
    //? const valor = self.indexOf(value) === index;
    //? console.log(valor); //true o false
    
}

//-----------------------------------------------------------//

// Funcion que pude lograr con la ayuda de StackOverlow ya que me estaba costando
// demasiado lidiar con el armado del RegExp. Tampoco sabía que se podia concatenar
// split y join de modo tal que automaticamente quite y vuelva a meter palabras en un texto... (de ésta manera).
function toUnderline(parrafo) {
    let text = parrafo.innerHTML;
    let parArr2 = text.split(/[\s,\.,\"]+/);
    parArr2.forEach((wrd) => {
        if (wrd.length > 5) {
            text = text.split(wrd).join(`<u>${wrd}</u>`);
            return (parrafo.innerHTML = text);
        }
    });
}

//-----------------------------------------------------------//

function getRandomColor() {
    const getRandomValue = (max) => Math.floor(Math.random() * (max + 1));
    return `rgb(${getRandomValue(255)}, ${getRandomValue(
        255
    )}, ${getRandomValue(255)})`;
}

//-----------------------------------------------------------//

function changeColors(element) {
    for (const item of element) {
        item.style = `
        background-color: ${getRandomColor()};
        box-shadow: inset 10px 10px 50px black;
        
`;
    }
}

//-----------------------------------------------------------//

const dobleZero = function (Time) {
    return Time < 10 ? '0' + Time : +Time;
};

//-----------------------------------------------------------//

export {
    binTodecimal,
    rmvRepeat,
    toUnderline,
    getRandomColor,
    changeColors,
    dobleZero,
};
