


class ApiGit {
    #defaultUrl = "https://api.github.com/users"
    constructor(input, btn) {
        axios.defaults.baseURL = this.#defaultUrl;
        this.input = input;
        this.btn = btn
        ApiGit.#createContainersUser();
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                ApiGit.#doAMagic()
            }
        })
        this.btn.addEventListener('click', () => {
            ApiGit.#doAMagic();

        })
    }
    static #doAMagic () {
        ApiGit.#getUser.then((response) => {
            ApiGit.#clearContainer()
            ApiGit.#renderUser(response);
        }).catch(e => {
            ApiGit.#clearContainer();
            ApiGit.#renderError()
        })
    }
    static get #getUser() {
        const user = input.value;
        if (user) {
            return axios.get(`${user}`)
        }
    }

    static #renderUser(data) {
        const CONTAINER = document.querySelector('.containers-user');
        const containerUser = ApiGit.#createElement('div', ['container-user'])
        const img = ApiGit.#createElement("img", ["image-user"]);
        const containerData = ApiGit.#createElement('div', ['container-data'])
        const quantityRep = ApiGit.#createElement('div', ["quantity-rep"]);
        const followers = ApiGit.#createElement("div", ["followers"]);
        const following = ApiGit.#createElement('div', ['following']);

        img.setAttribute('src', data.data.avatar_url);
        quantityRep.textContent = `Quantity repositories = ${data.data.public_repos}`;
        followers.textContent = `Followers = ${data.data.followers}`
        following.textContent = `Following = ${data.data.following}`

        const dataItems = [quantityRep, followers, following];
        dataItems.forEach(item => containerData.append(item));
        containerUser.append(img)
        containerUser.append(containerData);
        CONTAINER.append(containerUser);
    }


    static #renderError() {
        const container = document.querySelector(".containers-user");

        const error = ApiGit.#createElement('h1', ['error']);
        error.textContent = `${input.value} user doesn't exist on GitHub`
        container.append(error)
    }

    static #clearContainer( ) {
        const users = document.querySelectorAll('.container-user');
        const errors = document.querySelectorAll('.error');
        errors.forEach(err => err.remove())
        users.forEach(user => user.remove());
    }


    static #createElement(tag, className) {
        const el = document.createElement(tag);
        el.classList.add(...className);
        return el
    }

    static #createContainersUser () {
        const wrapper = document.querySelector(".wrapper");
        const container = ApiGit.#createElement('div', ['containers-user']);
        wrapper.append(container)

    }
}


const input = document.querySelector(".input");
const btn = document.querySelector(".btn-submit");

const apiGit = new ApiGit(input, btn);