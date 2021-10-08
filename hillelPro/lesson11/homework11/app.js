
const containerOperandEl = document.querySelector(".container-operand");
const containerNumbersEl = document.querySelector('.container-numbers');
const inputFieldEl = document.querySelector(".inputs-field");
const containerInputs = document.querySelector('.container-input-reset');
let firstDigitAndOperation;
const OPERANDS = [
    {class: ["operand", "cancel", "rotate"], id: "cancel"},
    {class: ["operand", "subtraction", "rotate"], id: "subtraction"},
    {class: ["operand", "multiply", "rotate"], id: "multiply"},
    {class: ["operand", "division", "rotate"], id: "division"},
    {class: ["operand", "sum", "rotate"], id: "sum"},
    {class: ["operand", "equal", "rotate"], id: "equal"},
    {class: ["operand", "back", "rotate"], id: "back"}
]

const OPERANDSID = {
    sum: "+",
    division: "/",
    multiply: "*",
    subtraction: "-"
}

const DIGITS = [
    {class: ["item", "item0", "rotate"], id:0 },
    {class: ["item", "item1", "rotate"], id:1 },
    {class: ["item", "item2", "rotate"], id:2 },
    {class: ["item", "item3", "rotate"], id:3 },
    {class: ["item", "item4", "rotate"], id:4 },
    {class: ["item", "item5", "rotate"], id:5 },
    {class: ["item", "item6", "rotate"], id:6 },
    {class: ["item", "item7", "rotate"], id:7 },
    {class: ["item", "item8", "rotate"], id:8 },
    {class: ["item", "item9", "rotate"], id:9 }
]

function Calculator(dgs, opr) {
    this.digits = dgs;
    this.operands = opr;
    this.run = createCalculator;
    const CREATEDIGIT = createDigits.bind(this.digits);
    const CREATEOPERAND = createOperands.bind(this.operands);
    containerOperandEl.addEventListener('click', e => {
        back(e)
        if (e.target.id !== "equal") {
            if (inputFieldEl.textContent.length > 0) {
                firstDigitAndOperation = firstDigits(e);
            }
        }else if (e.target.id === "equal"){
            if (firstDigitAndOperation){
                equal(e, firstDigitAndOperation[0], firstDigitAndOperation[1])
            }
        }
        cancel(e)
    })

    containerNumbersEl.addEventListener('click', e=> {
        if (inputFieldEl.textContent.length > 36) {
            renderError("Maximum of digits should be less or equal than 36");
        }else {
            renderDigitToInput(e);
        }
    });

    //MAIN FUNCTION;

    function createCalculator() {
        renderOperands();
        renderDigits();
    }


    //CREATE;

    function createElement(tag, id, className) {
        const el = document.createElement(tag);
        el.classList.add(...className);
        el.id = id
        return el
    }

    function createOperands () {
        this.forEach(operand => {
            const op = createElement("div", operand.id, operand.class);
            containerOperandEl.prepend(op);
        })
    }

    function createError (errorMsg){
        const error = createElement("div", Math.random(), ["errorDigit"]);
        error.textContent = errorMsg
        return error
    }

    function createDigits () {
        this.forEach(digit => {
            const dg = createElement("div", digit.id, digit.class);
            containerNumbersEl.prepend(dg)
        })
    }

    //RENDER;

    function renderDigitToInput (e) {
        e.target.classList.add("clicked");
        setTimeout(event => {
            e.target.classList.remove("clicked")
        }, 200);
        inputFieldEl.textContent += Number(e.target.id);
    }

    function renderError(errorMsg) {
        const ERROR = document.querySelector(".errorDigit")
        if (ERROR === null){
            const ers = createError(errorMsg);
            containerInputs.after(ers);
        }
    }

    function renderOperands () {
        CREATEOPERAND();
    }

    function renderDigits () {
        CREATEDIGIT()
    }


    //OPERANDS
    function firstDigits (e) {
        if (inputFieldEl.textContent.split(/\D/g).length === 2 || e.target.id === "back"){
            const number = Number(inputFieldEl.textContent.split(/\D/g)[0]);
            const operand = inputFieldEl.textContent.match(/\D/g);
            if (operand){
                return [number, operand[0]];
            }
        }
        if (e.target.id === "sum" || e.target.id === "subtraction" || e.target.id === "multiply" || e.target.id === "division") {
            console.log("sum")
            const number = Number(inputFieldEl.textContent) || Number(inputFieldEl.textContent.split(/\D/g)[0]);
            if (!inputFieldEl.textContent.includes(OPERANDSID[e.target.id])) {
                inputFieldEl.textContent = inputFieldEl.textContent + OPERANDSID[e.target.id]
                inputFieldEl.textContent.trim()
                return [number, e.target.id];
            } else {
                return [number, e.target.id]
            }
        }
    }


    function equal(e, firstDigit) {
        let sum;
        let secondDigit = Number(inputFieldEl.textContent.split(/\D/g)[1]);
        const ERROR = document.querySelector('.errorDigit');
        if (ERROR) {
            ERROR.remove();
        }
        const operation = inputFieldEl.textContent.match(/\D/g)[0]
        if (secondDigit){
            switch (operation) {
                case "+":
                    sum = firstDigit + secondDigit;
                    break
                case "-":
                    sum = firstDigit - secondDigit;
                    break
                case "*":
                    sum = firstDigit * secondDigit;
                    break
                case "/":
                    sum = firstDigit / secondDigit;
                    break
            }
            inputFieldEl.textContent = sum;
        }
    }



    function back(e) {
        if (e.target.id === "back") {
            if (inputFieldEl.textContent.length > 0) {
                inputFieldEl.textContent = inputFieldEl.textContent.substring(0, inputFieldEl.textContent.length - 1);
            }
            removeError()
        }
    }

    function cancel(e) {
        if (e.target.id === "cancel") {
            clearInput()
        }
        removeError()
    }

    function removeError(){
        const ERROR = document.querySelector(".errorDigit");
        if (ERROR) {
            ERROR.remove()
        }
    }

    function clearInput() {
        inputFieldEl.textContent = "";
    }

}




//START;
const calculator = (new Calculator(DIGITS, OPERANDS));
calculator.run();