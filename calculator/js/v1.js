//////////////////////////////////
//  Calculator V1
//  February, 2019
/////////////////////////////////

// global variables/constants
// DOM queries

const display = document.getElementById('display');
const equalsButton = document.getElementById('equals');

// query all the buttons
const buttonsArray = document.querySelectorAll('.button');

let firstNumber = '';
let operation = '';
let secondNumber = '';
let displayValue = '';
let totalString = '';

// apply event listener to all the buttons
buttonsArray.forEach(element => {
  if (element.dataset.number || element.dataset.operator) {
    element.addEventListener('click', () => {
      // if it's a long number, change font size
      if (display.innerText.length >= 8) {
        display.style.fontSize = '28px';
        display.style.paddingTop = '44px';
      }

      // check if the button is a number
      if (element.dataset.number) {
        totalString += element.dataset.number;
        firstNumber += element.dataset.number;
        display.innerText = firstNumber;
      }
      // check if the button is + - / * operator
      if (
        element.dataset.operator &&
        totalString != '' &&
        element.dataset.operator != '=' &&
        element.dataset.operator != 'c' &&
        element.dataset.operator != 'plus-minus' &&
        element.dataset.operator != 'percent' &&
        element.dataset.operator != '.'
      ) {
        totalString += element.dataset.operator;
        firstNumber = '';
      }
      // equals
      if (element.dataset.operator === '=' && firstNumber != '') {
        totalString = eval(totalString);
        display.innerText = totalString;
        totalString = display.innerText;

        firstNumber = '';
      }
      // reset display or 0
      if (element.dataset.operator === 'c') {
        firstNumber = '';
        display.innerText = '0';
        totalString = '';
      }
      // floating point
      if (element.dataset.operator === '.' && firstNumber != '') {
        firstNumber += element.dataset.operator;
        totalString += element.dataset.operator;
        display.innerText = totalString;
      }
      // percent --- not quite working
      if (
        element.dataset.operator === 'percent' &&
        firstNumber != '' &&
        totalString != ''
      ) {
        totalString += '/100';
        display.innerText = eval(totalString);
        totalString = display.innerText;
        firstNumber = '';
      }
      // change sign
      if (element.dataset.operator === 'plus-minus' && firstNumber != '') {
        display.innerText = eval(totalString * -1);
        totalString = display.innerText;
        firstNumber = 'display.innerText';
      }
    });
  }
});
