//Global Variables
var operatorElem;
var n1 = "";
var n2 = "";

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
    let num1 = Number(n1);
    let num2 = Number(n2);
    switch(operator) {
        case "+":
            total = add(num1, num2);
            break;
        case "-":
            total = subtract(num1, num2);
            break;
        case "x":
            total = multiply(num1, num2);
            break;
        case "/":
            total = divide(num1, num2);
            break;
    }
    displayScreen(total);
}

const displayScreen = (displayElement) => {
    const screen = document.querySelector('.Display');
    screen.textContent = displayElement;
}

const saveOperator = (e) => {
    const element = e.target.textContent;
    operatorElem = element;
    console.log('operator: ' + operatorElem);
    displayScreen(element);
}

const operators = document.querySelectorAll('.Operator');
operators.forEach(operator => operator.addEventListener('click', saveOperator));

const displayNumber = (e) => {
    let element = e.target.textContent;
    if(operatorElem === undefined) {
        n1 += element;
        displayScreen(n1);
        console.log('n1: ' + n1);
    } else {
        n2 += element;
        displayScreen(n2);
        console.log('n2: ' + n2);
    }
}

const numbers = document.querySelectorAll('.Numbers');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const total = document.querySelector('.Equal');
total.addEventListener('click', function() {
    operate(operatorElem, n1, n2);
});

const clear = document.querySelector('.Clear');
clear.addEventListener('click', function() {
    n1 = "";
    n2 = "";
    operatorElem = undefined;
    displayScreen("");
});
