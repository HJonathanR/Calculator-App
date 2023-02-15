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

const operator = (operator, n1, n2) => {
    switch(operator) {
        case "Add":
            add(n1, n2);
            break;
        case "Subtract":
            subtract(n1, n2);
            break;
        case "Multiply":
            multiply(n1, n2);
            break;
        case "Divide":
            divide(n1, n2);
            break;
    }
}