const MAXTIME = 1000;
const oneTIME = 200;



const ASTRO = [
    {
        name: "Viacheslav",
        time: 0,
        result: "",
    },
    {
        name: "Vladyslav",
        time: 0,
        result: "",
    },
    {
        name: "Olga",
        time: 0,
        result: "",
    },
];

let promisesALL = {
    success: [],
    failed: [],
}
let promises = [];




function training(ASTRO) {

    ASTRO.forEach((astro, index) => {
        const promise = astroTrain(astro, index);
        promises.push(promise);
    });

    Promise.allSettled(promises)
        .then((results) => {
            render(results)
        })
        .catch((e) => {
            console.log(e);
        });
}

function astroTrain(astro, index) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() > 0.8) {
                astro.result = "SUCCESS";
                astro.time += oneTIME;
                res(astro);
            } else {
                astro.time += oneTIME;
                if (astro.time >= MAXTIME) {
                    astro.result = "FAILED";
                }
                rej(astro);
            }
        }, oneTIME);
    }).then((astro) => {
        if (astro.result === "SUCCESS") {
            promisesALL.success.push(astro);
            return astro;
        }
    }).catch((astro)=>{
        if(astro.result === "FAILED"){
            promisesALL.failed.push(astro);
            return astro;
        }
        if (astro.time < MAXTIME) {
            return astroTrain(astro, index);
        }
    })
}
function render(astro) {
    const container = document.querySelector(".container-item")
    astro.forEach(astro => {
        const ITEM = createElement("div", ['item', astro.value.result === "FAILED" ? "failed" : "success"])
        const name = createElement('div', ['name', 'item-name']);
        const time = createElement('div', ['time', 'item-time']);
        const result = createElement('div', ['result', 'item-result']);
        const data = [astro.value.name, astro.value.time, astro.value.result];
        [name, time, result].forEach(((el, i) => {
            el.textContent = data[i]
            ITEM.append(el)
            container.append(ITEM);
        }));

    })

}


function createElement(el, className) {
    const element = document.createElement(el);
    element.classList.add(...className);
    return element

}

training(ASTRO)



