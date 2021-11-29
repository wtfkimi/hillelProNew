const ERROR = {
    conn: "Check connection and try again",
    emp: "This is required field",
};

const ID = {
    name: "#email",
    pass: "#password",
};
const classes = {
    error: '.error'
}

const errorEl$ = $(".error");
const btnSubmit$ = $(".btn");

btnSubmit$.on("click", submit);

function submit(e) {
    e.preventDefault();
    const name$ = getData(ID.name);
    const pass$ = getData(ID.pass);
    const err = [];
    err.push(validData(name$, ID.name));
    err.push(validData(pass$, ID.pass));

    if (!err.includes(false)) {
        fetch("http://api/login")
            .then((response) => {
                console.log("success");
                removeInputVal(ID.name);
                removeInputVal(ID.pass);
                //   return response.json();
            })
            .catch(() => {
                removeInputVal(ID.name);
                removeInputVal(ID.pass);
                errorEl$.text(ERROR.conn);
                setTimeout(() => {
                    removeError(classes.error)
                }, 2500)
            });
    }
}

function getData(idOfElement) {
    return $(idOfElement).val().trim();
}


function validData(val, id) {
    if (val) {
        const input = $(id);
        const errCnt = input.next(".errorMessage");
        errCnt.empty();
        return true;
    } else {
        const input = $(id);
        const errCnt = input.next(".errorMessage");
        errCnt.text(ERROR.emp);
        return false;
    }
}
function removeInputVal(inputId) {
    $(inputId).val("");
}

function removeError(el) {
    $(el).text("");
}
