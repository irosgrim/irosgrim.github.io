// global variables/constants
// DOM queries
const popup = document.getElementById('popup');
const op = document.getElementById('op');
let statusMsg = document.getElementById('status-msg');
let firstNumberInpt = document.getElementById('firstNumber');
let secondNumberInpt = document.getElementById('secondNumber');
let resultNr = document.getElementById('result');

const calcBtn = document.getElementById('calculate');

// calculate
calcBtn.addEventListener('click', () => {
  let str = firstNumberInpt.value + op.value + secondNumberInpt.value;
  let expression = eval(str);
  resultNr.innerText = expression.toFixed(2);
  expression < 0
    ? (popup.style.backgroundColor = '#F9876F')
    : expression === 0
    ? (popup.style.backgroundColor = '#ADD483')
    : (popup.style.backgroundColor = '#90B6D0');
});
