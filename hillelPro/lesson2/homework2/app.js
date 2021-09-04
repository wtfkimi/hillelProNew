
function operation () {
    const isUserReady = confirm('Please, confirm, to enter action of operation');
    let action;
    const actions = ["/", "*", "+", "-"]
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

function param () {
    let dg0 = Number(prompt('Enter first digit(Not some alphabetic symbol)'));
    let dg1 = Number(prompt('Enter second digit(Not some alphabetic symbol)'));
    while (isNaN(dg0) || isNaN(dg1)){
        dg0 = Number(prompt('Enter first digit(Not some alphabetic symbol)'));
        dg1 = Number(prompt('Enter second digit(Not some alphabetic symbol)'));
    }
    return [dg0, dg1];
}


function calculator(action, params) {
    let result;
    if (action === "*") {
        result = params[0] * params[1];
    }else if (action === "/") {
        result = params[0] / params[1];
    }else if (params === "+") {
        result = params[0] + params[1];
    }else {
        result = params[0] + params[1];
    }
    alert(`${params[0]} ${action} ${params[1]} = ${result}`)
}

let action = operation()
let params = param();

if (action === "Action canceled" || params.length === 0){
    alert("You canceled one of the actions");
}else {
    calculator(action, params);
}
