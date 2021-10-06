const containersItem = document.querySelector(".table-container");
const inputsUser = document.querySelectorAll(".user-inputs");
const containerEl = document.querySelector(".table-container");
const buttonSubmitEl = document.querySelector("#btn");
const ELEMENT = (tag, id, className, val) =>{
    return `<${tag} class=${className}>${val}</${tag}>`
}
const validInpZero = {
    name: null,
    lastName: null,
    phone: null
}

const validPhone = {
    phone: null
}


const IDS = {
    name: "name-validation",
    lastName: "lastName-validation",
    phone: "phone-validation"
}


const ERROR_MSG = {
    zero: "Input value should be more than 2 symbols",
    phone: "Please input correct phone"
};

const validations = {
    zero: validateZero,
    phone: validatePhone
}

containersItem.addEventListener('click', e => {
    done(e);
    deleteItem(e);
})

buttonSubmitEl.addEventListener('click', () => {
    addElement();
})
const INPUT_IDS = {
    name: "name",
    lastName: "lastName",
    phone: "phone",
};

const contacts = [];




function addElement() {
    clearError()
    const valid = validate(inputsUser);
    if (valid) {
        createContact(inputsUser);
        renderContact(contacts[contacts.length - 1], containerEl);
        clearValue(inputsUser);
    }
}


function createContact(userInputs) {
    const contactValue = [...userInputs].reduce((acc, el)=> {
        acc[INPUT_IDS[el.id]] = el.value
        return acc
    }, {id: `item_${Math.random()}`});
    contacts.push(contactValue);
}

function renderContact (el, containerItems) {
    const contactContainer = createContainerElement("div", el.id, ["container-items", "not-done"]);
    Object.keys(el).filter(key => {
        if (key !== "id") {
            const elem = ELEMENT(
                "div",
                key + el[key] + 2,
                "container-item",
                el[key]
            );
            contactContainer.insertAdjacentHTML("beforeend", elem);
        }
    })
    contactContainer.insertAdjacentHTML(
        "beforeend",
        `<div class="table-item close"></div>`
    );
    containerItems.append(contactContainer);
}



function createContainerElement (tag, id, className) {
    const el = document.createElement(tag);
    el.classList.add(...className);
    el.id = id;
    return el
}




function validate(inputs) {
    let zero = validations.zero(inputs);
    let phone = validations.phone(inputs[2]);
    return zero && phone
}


function clearValue (inputs) {
    [...inputs].forEach(inputEl => {
        inputEl.value = ""
    });
}

function validateZero(inputs) {
    [...inputs].forEach(inp => {
        if (inp.value.length > 2) {
            validInpZero[inp.id] = true
        }else {
            validInpZero[inp.id] = false
            displayError(IDS[inp.id], ERROR_MSG.zero);
        }
    })
    return !Object.values(validInpZero).includes(false);

}

function displayError(id, val) {
    const containerError = document.querySelector(`#${id}`);
    containerError.innerText += `\n${val}`
}

function clearError() {
    let errors = document.querySelectorAll(".validation-msgs");
    errors.forEach(err => {
        err.innerText = "";
    })
}

function validatePhone (phone) {
    let valid = phone.value.match(/^((\+?3)?8)?0\d{9}$/);
    if (!valid) {
        validPhone.phone = false;
        displayError(IDS[phone.id], ERROR_MSG.phone);
    }else {
        validPhone.phone = true
    }
    return !Object.values(validPhone).includes(false)
}

function done(e) {
    if (e.target.classList[0] === "container-item") {
        e.target.parentElement.classList.toggle("done");
    }
}

function deleteItem(e) {
    if (e.target.classList[1] === "close") {
        e.target.parentElement.remove();
    }
}



