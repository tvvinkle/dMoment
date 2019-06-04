const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1")

function getTime() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const zone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];

    clockTitle.innerText = `${hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds} ${zone}`;

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();