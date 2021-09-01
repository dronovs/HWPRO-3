let firstOperand = 0;
let secondOperand = 0;
let result = 0;
let confirming = false;

do {
    let operator = prompt('choose your operation: +, -, /, *, cos, sin or pow', '+');
    firstOperand = +prompt('please enter first operand');
    if (isNaN(firstOperand)) {
        while (isNaN(firstOperand)) {
            firstOperand = +prompt('enter NUMBER please');
        }
    }

    if (operator === '+') {
        secondOperand = +prompt('please enter second operand');
        if (isNaN(secondOperand)) {
            while (isNaN(secondOperand)) {
                secondOperand = +prompt('enter NUMBER please');
            }
        }
        result = `sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
    } else if (operator === '-') {
        secondOperand = +prompt('please enter second operand');
        if (isNaN(secondOperand)) {
            while (isNaN(secondOperand)) {
                secondOperand = +prompt('enter NUMBER please');
            }
        }
        result = `diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
    } else if (operator === '/') {
        secondOperand = +prompt('please enter second operand');
        if (isNaN(secondOperand)) {
            while (isNaN(secondOperand)) {
                secondOperand = +prompt('enter NUMBER please');
            }
        }
        result = `div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
    } else if (operator === '*') {
        secondOperand = +prompt('please enter second operand');
        if (isNaN(secondOperand)) {
            while (isNaN(secondOperand)) {
                secondOperand = +prompt('enter NUMBER please');
            }
        }
        result = `mult: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
    } else if (operator === 'pow') {
        secondOperand = +prompt('please enter second operand');
        if (isNaN(secondOperand)) {
            while (isNaN(secondOperand)) {
                secondOperand = +prompt('enter NUMBER please');
            }
        }
        result = `pow: ${firstOperand} ** ${secondOperand} = ${Math.pow(firstOperand, secondOperand)}`;
    } else if (operator === 'sin') {
        result = `sin: ${firstOperand} = ${Math.sin(firstOperand)}`;
    } else if (operator === 'cos') {
        result = `cos: ${firstOperand} = ${Math.cos(firstOperand)}`;
    }
    console.log(result);
    alert(result);
    confirming = confirm('another one calculation?');
} while (confirming === true);