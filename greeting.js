const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    USER_LS = "currentUser",
    greeting = document.querySelector(".js-greetings"),
    SHOWING_CN = "show";


function setUser(txt) {
    localStorage.setItem(USER_LS, txt);
}

function handleSubmit(event) {
    event.preventDefault();
    const inputValue = input.value;
    greet(inputValue);
    setUser(inputValue);
}

function setName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadUser() {
    const currentUser = localStorage.getItem(USER_LS)

    if (currentUser === null) {
        setName();
    } else {
        greet(currentUser);
    }
}

function greet(txt) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${txt}`
}


function init() {
    loadUser()

}

init();