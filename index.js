
// generate all conversions when the user clicks "convert"
// round the number to 3 decimal places

const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');
const lengthEl = document.getElementById('length-el');

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// lengthEl.textContent = '1 meter = 3.281 feet';20 meters = 65.616 feet | 20 feet = 6.096 meters

convertBtn.addEventListener('click', convertLength);


function convertLength() {
    let meters = inputEl.value;
    let feet = (meters * 3.281).toFixed(3);
    lengthEl.textContent = `${meters} meters = ${feet} feet | ${meters} feet = ${(meters / 3.281).toFixed(3)} meters`;
    inputEl.value = '';
}