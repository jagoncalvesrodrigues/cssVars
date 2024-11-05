// # Ejercicios

// ## VARIABLES CSS

// - Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. 
// El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo 
// scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

// - Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

// - Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y 
// otra para generarlo en hexadecimal y ejecuta cada una desde un botón

// - Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.


const rootStyles = document.documentElement.style;
const pxElement = document.getElementById('px');
const rgbElement = document.getElementById('button-rgb');
const hexadecimalElement = document.getElementById('button-hexadecimal');
const movementBox = document.getElementById('movementBox');

  
const changeWidthBox = () => {
    const element = document.body.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY;
    rootStyles.setProperty('--width-box', scrollY/element*100 +'%');
    pxElement.innerHTML = Math.round(scrollY);
};

const randomColorRGB = () => {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    rootStyles.setProperty('--bg-color', randomColor);
};
  
const randomColorHexadecimal = () => {
    const letters = '0123456789ABCDEF';
    let newRandomColor = '';

    for (let index = 0; index < 6; index++) {
        const randomColorNumber = Math.floor(Math.random() * letters.length);
        newRandomColor += letters[randomColorNumber];
    }

    rootStyles.setProperty('--bg-color', '#'+newRandomColor);
};

const setBoxPosition = event => {
    const positionX = event.x;
    const positionY = event.y;
    rootStyles.setProperty('--position-x', positionX + 'px');
    rootStyles.setProperty('--position-y', positionY + 'px');
  };

window.addEventListener('scroll', changeWidthBox);
rgbElement.addEventListener('click', randomColorRGB);
hexadecimalElement.addEventListener('click', randomColorHexadecimal);
window.addEventListener('mousemove', setBoxPosition);


  
