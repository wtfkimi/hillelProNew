const actions = ["/", "*", "+", "-"];
const operands = ["2", "3", "4", "5"];
const sum = (prev, curr) => prev + curr;
const multiply = (prev, curr) => prev * curr;
const divide = (prev, curr) => prev / curr;
const subtraction = (prev, curr) => prev - curr;

function operation () {
    const isUserReady = confirm('Please, confirm, to enter action of operation');
    let action;

    if (isUserReady) {
        action = prompt('Enter action(Action should be *; /; +; -.');
        while (!actions.includes(action)){
            action = prompt('Enter action(Action should be *; /; +; -.');
        }
        return action
    }else {
        return 'Action canceled'
    }
}

function getNumbers (operand) {
    let numbers = [];
    let num;
    let iteration = 1;
    while (operand > 0) {
        num = Number(prompt(`Enter ${iteration} digit(Not some alphabetic symbol)`));
        while (isNaN(num)){
            num = Number(prompt(`Enter ${iteration} digit(Not some alphabetic symbol)`));
        }
        iteration++
        numbers.push(Number(num));
        operand--
    }
    return numbers
}


function calculator(action, params) {
    let result;
    switch (action) {
        case "*":
            result = params.reduce(multiply);
            break
        case "/":
            result = params.reduce(divide)
            break
        case "+":
            result = params.reduce(sum);
            break
        case "-":
            result = params.reduce(subtraction);
            break
    }
    let newParams = [];
    for (let i = 0; i < params.length; i++) {
        if (i === 0) {
            newParams.push(params[i]);
        }else if (i === params.length) {
            newParams.push(params[i]);
        } else {
            newParams.push(`${action} ${params[i]}`)
        }
    }
    alert(`${newParams.join(" ")} = ${result}`)
}

function chooseOperands () {
    let sumOperand;
    do {
        sumOperand = prompt("How many operands do you want to use (choose from 2 to 5)?");
    } while (!operands.includes(sumOperand))
    return sumOperand;
}

let action = operation()
let operands0 = chooseOperands();
let params = getNumbers(operands0);

if (action === "Action canceled" || params.length === 0){
    alert("You canceled one of the actions");
}else {
    calculator(action, params);
}
