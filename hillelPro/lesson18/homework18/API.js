const userContainer = document.querySelector("#usersContainer");
const btnCreate = document.querySelector('.create')

const ENVORINMENT = {
    Users: {
        getUsers: "/users/",
    },
};

class HTTPService {
    static API = "https://jsonplaceholder.typicode.com";
    get(url, data = null) {
        if (!data) {
            return axios.get(`${HTTPService.API}${url}`);
        } else {
            return axios.get(`${HTTPService.API}${url}?${data}`);
        }
    }
}

const httpService = new HTTPService();

httpService
    .get(ENVORINMENT.Users.getUsers)
    .then((response) => {
        response.data.forEach((user) => {
            renderUser(user);
        });
    })
    .catch((e) => {
        console.log(e);
        let div = document.createElement("div");
        div.textContent =
            "Can not get users. Please, check your internet connection and try again";
        userContainer.append(div);
    });

userContainer.addEventListener("click", onBtnClick);

function onBtnClick(e) {
    if (!e.target.classList.contains("btn")) {
        return;
    }
    editUser(e);
    deleteUser(e);
}

btnCreate.addEventListener('click', e => {
    createUser(e)
})



function renderUser(user) {
    const [divUser, divName, btnDelete, btnEdit, editInput] = createUserContainer(user)

    divUser.append(divName);
    divUser.append(btnDelete);
    divUser.append(btnEdit);
    divUser.append(editInput);
    userContainer.append(divUser);
}

function createUserContainer (user) {
    const divUser = createElement('div', ['user'])
    const divName = createElement("div", ['nameEl'], user.name, user.id);
    const btnDelete = createElement("button", ['btn', 'delete'], 'Delete');
    const btnEdit = createElement("button", ['btn', 'edit'], 'Edit');
    const editInput = createElement("input", ['inputEdit'], '', '', 'Edit user and click.');

    return [divUser, divName, btnDelete, btnEdit, editInput]
}

function editUser(e) {
    if ([...e.target.classList].includes('edit') && e.target.nextElementSibling.value) {
        const nameToChange = e.target.previousElementSibling.previousElementSibling
        nameToChange.textContent = e.target.nextElementSibling.value;
    }else if ([...e.target.classList].includes('edit') && !e.target.nextElementSibling.value) {
        alert('No value in input!!!')
    }
}

function createUser (e) {
    if ([...e.target.classList].includes('create')) {
        const nameText = document.querySelector('.name').value;
        console.log(nameText)
        const surnameText = document.querySelector('.name').value;
        const user = {
            name: `${nameText} ${surnameText}`,
            id: Math.random()
        }
        if (user.name) {
            renderUser(user)
        }

    }
}

function deleteUser (e) {
    if ([...e.target.classList].includes('delete')) {
        e.target.parentElement.remove()
    }
}

function createElement (tag, classes, textContent, id, placeholder) {
    const element = document.createElement(tag)
    element.classList.add(...classes)
    if (textContent) {
        element.textContent = textContent;
    }
    if (id) {
        element.dataset.id = id
    }
    if (placeholder) {
        element.placeholder = placeholder
    }
    return element
}