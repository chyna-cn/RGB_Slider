let red = document.getElementById('r');
let blue = document.getElementById('b');
let green = document.getElementById('g');
let redValue = document.getElementById('r-btn');
let blueValue = document.getElementById('b-btn');
let greenValue = document.getElementById('g-btn');
let hex = document.getElementById('hex');
let container = document.getElementById('container');

function colorChange() {
    let red1 = red.value;
    let blue1 = blue.value;
    let green1 = green.value;
    redValue.innerHTML = red1;
    blueValue.innerHTML = blue1;
    greenValue.innerHTML = green1;
    let red1_hex = parseInt(red1).toString(16);
    let blue1_hex = parseInt(blue1).toString(16);
    let green1_hex = parseInt(green1).toString(16);
    let hexVal = '#' + red1_hex + blue1_hex + green1_hex;
    hex.innerHTML = hexVal;
    container.style.backgroundColor = hexVal;
}

red.addEventListener('change', colorChange);
blue.addEventListener('change', colorChange);
green.addEventListener('change', colorChange);
