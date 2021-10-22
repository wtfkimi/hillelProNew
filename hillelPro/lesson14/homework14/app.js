

const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav")

burger.addEventListener('click', () => {

    nav.classList.toggle("flex");
    if (nav.classList.contains("flex")) {
        nav.style.left = "0%"
        burger.style.backgroundImage = "url(\"img/cross.png\")"
    }else {
        burger.style.backgroundImage = "url(\"img/burger.png\")"
        nav.style.left = "-100%"
    }
})

nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("link")) {
        burger.style.backgroundImage = "url(\"img/burger.png\")"
        nav.style.left = "-100%"
    }
})