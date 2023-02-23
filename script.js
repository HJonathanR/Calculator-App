//Global Variables
var operatorElem;
var n1;
var n2;

//functions for calculator
const add = (number1, number2) => {
    const total = number1 + number2;
    return total;
}

const subtract = (number1, number2) => {
    const total = number1 - number2;
    return total;
}

const multiply = (number1, number2) => {
    const total = number1 * number2;
    return total;
}

const divide = (number1, number2) => {
    const total = number1 / number2;
    return total;
}

const operate = (operator, n1, n2) => {
    let total = 0;
    switch(operator) {
        case "+":
            total = add(n1, n2);
            break;
        case "-":
            total = subtract(n1, n2);
            break;
        case "x":
            total = multiply(n1, n2);
            break;
        case "/":
            total = divide(n1, n2);
            break;
    }
    n1 = total;
    displayScreen(total);
}

const displayScreen = (displayElement) => {
    const screen = document.querySelector('.Display');
    screen.textContent += displayElement;
}

const saveOperator = (e) => {
    const displayNum = document.querySelector('.Display');
    n1 = displayNum.textContent;
    console.log('n1: ' + n1);
    
    if(n1 != undefined) {
        const element = e.target.textContent;
        displayScreen(element);
        operatorElem = element;
    } else {
        alert("Please Select a number first");
    }
    console.log("opElem: " + operatorElem);
}

const operators = document.querySelectorAll('.Operator');
operators.forEach(operator => operator.addEventListener('click', saveOperator));

const displayNumber = (e) => {
    let Element = e.target.textContent;
    displayScreen(Element);
    /*if (operatorElem === undefined) {
        n1 = Number(Element);
        console.log("n1: " + n1);
    } else {
        n2 = Number(Element);
        console.log("n2: " + n2);
    }*/
}

const numbers = document.querySelectorAll('.Numbers');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const total = document.querySelector('.Equal');
total.addEventListener('click', function() {
    operate(operatorElem, n1, n2);
});

const clear = document.querySelector('.Clear');
clear.addEventListener('click', function() {
    n1 = undefined;
    n2 = undefined;
    operatorElem = undefined;
    displayScreen(0);
});
