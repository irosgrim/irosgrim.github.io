//////////////////////////////////
//  By Ion Rosgrim
//  Webbutveckling 2, Uppdrag 3
//  Miniräknare
//  https://github.com/irosgrim
//  January, 2019
/////////////////////////////////

// global variables/constants
// DOM queries

//result box
const popup = document.getElementById('popup');
let resultNr = document.getElementById('result');

// background color for result box
const negativeNumber = '#F9876F';
const zeroNumber = '#ADD483';
const positiveNumber = '#90B6D0';

// number inputs, select and button

const firstNumberInpt = document.getElementById('firstNumber');
const secondNumberInpt = document.getElementById('secondNumber');
const calcBtn = document.getElementById('calculate');

//html select
const op = document.getElementById('op');

// calculator
calcBtn.addEventListener('click', () => {
  //concatenate first number, operator and second number
  let str = firstNumberInpt.value + op.value + secondNumberInpt.value;

  //if the inputs are not empty, evaluate the expression
  if (firstNumberInpt.value !== '' && secondNumberInpt.value !== '') {
    let expression = eval(str);

    //display the result
    resultNr.innerText = expression.toFixed(2);

    //change background based on result, ternary expression
    popup.style.backgroundColor =
      expression < 0
        ? negativeNumber
        : expression === 0
        ? zeroNumber
        : positiveNumber;

    //show alert in case inputs are empty
  } else {
    alert('Inputs cannot be empty.');
  }
});
