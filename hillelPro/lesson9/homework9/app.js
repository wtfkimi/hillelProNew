const tableContainer = document.querySelector(".table-contacts")
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#tel');
const button = document.querySelector("#submit-button");
button.addEventListener('click', addContact);

function addContact() {
    const name = nameEl.value;
    const surname = surnameEl.value;
    const phone = phoneEl.value
    const data = [name, surname];
    if (checkData(data)) {
        if (checkNumber(phone)){
            clearData([nameEl, surnameEl, phoneEl])
            createContact(name, surname, phone, tableContainer);
        }else {
            alert("Incorrect number format or empty number");
        }
    }else {
        alert("Some of data provided invalid(It can be empty inputs)")
    }
}

function createContact(name, surname, phoneNumber, container) {
    let contact = document.getElementById('template-contact').innerHTML
        .replace("{{Name}}", name)
        .replace("{{Surname}}", surname)
        .replace("{{PhoneNumber}}", phoneNumber)

    container.innerHTML += contact;
    let children = document.querySelector(".table-contacts").children
    children.length % 2 === 0 ? children[children.length - 1].style.background = "#FFFFFF" : children[children.length - 1].style.background = "#A0A0A0"
}

function checkData(data) {
    let isDataValid
    for (let some of data) {
        if (some.trim().length > 0) {
            isDataValid = true
        }else {
            return false
        }
    }
    return isDataValid
}

function clearData(data) {
    for (let input of data) {
        input.value = "";
    }
}

function checkNumber(number) {
    return number.match(/^\+\d{12}$/g);
}

function onEnter(event) {
    if (event.key === "Enter") {
        addContact();
    }
}