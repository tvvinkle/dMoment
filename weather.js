const API_KEY = "975675265d9c161147886062f6115ef4";
const weather = document.querySelector(".temp");
const loca = document.querySelector(".location");
const COORDS = 'coords';

function getWeather(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=imperial`)
    .then(function(res){
       return res.json()
    })
    .then(function(json){
        console.log("body:",json)
        const temp = json.main.temp,
        place=json.name;
        weather.innerText = `${temp}°`;
        loca.innerText = `${place}`;
    })
}

function saveCoords(obj) {
    localStorage.setItem(COORDS, JSON.stringify(obj))
}

function handleSuccess(position) {
    const lat = position.coords.latitude,
        long = position.coords.longitude,
        coords = {
            lat,
            long
        }
    saveCoords(coords);
    getWeather(lat, long);
}

function handleError() {
    console.log("Can not get the location info")
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

function getLocation() {
    const coords = localStorage.getItem(COORDS);
    if (coords === null) {
        getCoords();
    } else {
        getWeather(coords.lat, coords.long);

    }
}

function init() {
    getCoords();
}

init();