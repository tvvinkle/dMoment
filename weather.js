const COORDS = 'coords';


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

    console.log("position:",position, "lat:", lat, "long:", long);
    saveCoords(coords);
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
        // get weather
    }
}

function init() {
   getCoords();}

init();