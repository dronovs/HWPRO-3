let operator = prompt('choose you operation: +, -, /, *, cos, sin or pow', '+');

let firstOperand = 0;
let secondOperand = 0;
let result = 0;

if (operator === '+') {
    firstOperand = +prompt('please enter first operand');
    secondOperand = +prompt('please enter second operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter first NUMBER please');
        }
    }
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('enter second NUMBER please');
        }
    }
    result = `sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
    console.log(result);
    alert(result);
} else if (operator === '-') {
    firstOperand = +prompt('please enter first operand');
    secondOperand = +prompt('please enter second operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter first NUMBER please');
        }
    }
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('enter second NUMBER please');
        }
    }
    result = `diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
    console.log(result);
    alert(result);
} else if (operator === '/') {
    firstOperand = +prompt('please enter first operand');
    secondOperand = +prompt('please enter second operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter first NUMBER please');
        }
    }
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('enter second NUMBER please');
        }
    }
    result = `div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
    console.log(result);
    alert(result);
} else if (operator === '*') {
    firstOperand = +prompt('please enter first operand');
    secondOperand = +prompt('please enter second operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter first NUMBER please');
        }
    }
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('enter second NUMBER please');
        }
    }
    result = `div: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
    console.log(result);
    alert(result);
} else if (operator === 'pow') {
    firstOperand = +prompt('please enter first operand');
    secondOperand = +prompt('please enter second operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter first NUMBER please');
        }
    }
    if (isNaN(secondOperand)) {
        while (isNaN(secondOperand)) {
            secondOperand = +prompt('enter second NUMBER please');
        }
    }
    result = `pow: ${firstOperand} ** ${secondOperand} = ${Math.pow(firstOperand, secondOperand)}`;
    console.log(result);
    alert(result);
}
