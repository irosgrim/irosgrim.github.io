console.log(`
//////////////////////////////////
//  By Ion Rosgrim
//  Calculator V2
//  All the functions work as expected
//  https://github.com/irosgrim
//  February, 2019
/////////////////////////////////`);

// global variables/constants
// DOM queries

let displayBig = document.getElementById('display');
let expression = document.getElementById('expression');
const equalsButton = document.getElementById('equals');

// query all the buttons and make a node list
const buttonsArray = document.querySelectorAll('.button');

// format the number to ISO: ex 10000 becomes 10 000
function setTotal(nr) {
  nr === ''
    ? (displayBig.innerText = nr)
    : (displayBig.innerText = Number(nr)
        .toLocaleString('en')
        .replace(/,/g, ' '));
}

//get the number from the display
function getTotal() {
  return displayBig.innerText;
}

//replace ISO formating
function cleanOutputNr(nr) {
  return Number(nr.replace(/\s/g, ''));
}

// event delegation
buttonsArray.forEach(button => {
  button.addEventListener('click', e => {
    let nrPressed = cleanOutputNr(getTotal());
    if (e.target.dataset.number && displayBig.innerText.length <= 9) {
      if (nrPressed !== NaN) {
        nrPressed += e.target.dataset.number;
        setTotal(nrPressed);
      }
    }

    // keyboard functions
    // button C is pressed
    if (e.target.dataset.operator === 'c') {
      setTotal('');
      expression.innerText = '';
    }

    // button C is pressed
    if (e.target.dataset.operator === 'plus-minus') {
      let nr = cleanOutputNr(getTotal()) * -1;
      setTotal(nr);
    }

    // sum operation
    if (e.target.dataset.operator === '+') {
      let nr = cleanOutputNr(getTotal()) + '+';
      let expressionContent = expression.innerText;

      if (displayBig.innerText != '') {
        expression.innerText += nr;
        displayBig.innerText = '';
      }
    }
    // minus operation
    if (e.target.dataset.operator === '-') {
      let nr = cleanOutputNr(getTotal()) + '-';
      let expressionContent = expression.innerText;

      if (displayBig.innerText != '') {
        expression.innerText += nr;
        displayBig.innerText = '';
      }
    }
    // multiply operation
    if (e.target.dataset.operator === '*') {
      let nr = cleanOutputNr(getTotal()) + '*';
      let expressionContent = expression.innerText;

      if (displayBig.innerText != '') {
        expression.innerText += nr;
        displayBig.innerText = '';
      }
    }
    // division operation
    if (e.target.dataset.operator === '/') {
      let nr = cleanOutputNr(getTotal()) + '/';
      let expressionContent = expression.innerText;

      if (displayBig.innerText != '') {
        expression.innerText += nr;
        displayBig.innerText = '';
      }
    }

    //percent operation
    if (e.target.dataset.operator === 'percent') {
      let expressionContent = expression.innerText;
      let lastOp = expressionContent.substring(expressionContent.length - 1);

      if (lastOp === NaN || expression.innerText !== '') {
        let removeLastOp = expressionContent.substring(
          0,
          expressionContent.length - 1
        );

        let nr = Number(eval(removeLastOp));
        let secondNr = (nr * displayBig.innerText) / 100;
        let calcPercent = eval(`${nr}${lastOp}${secondNr}`) * 100;

        if (displayBig.innerText != '') {
          expression.innerText = '';
          displayBig.innerText = calcPercent;
        }
      }

      if (expression.innerText === '' && displayBig.innerText !== '') {
        displayBig.innerText = displayBig.innerText / 100;
      }
    }

    // calculating the math expression
    if (
      e.target.dataset.operator === '=' &&
      expression.innerText !== '' &&
      displayBig.innerText !== ''
    ) {
      let total = expression.innerText + cleanOutputNr(displayBig.innerText);
      let evalExpr = Number(eval(total));
      expression.innerText = '';
      displayBig.innerText = evalExpr
        .toLocaleString('en')
        .replace(/,/g, ' ')
        .substring(0, 10);
    }
  });
});
