const body = document.querySelector("body");

const ImgNo = 10;

function getImg(num) {
    const image = new Image();
    image.src = `images/${num+1}.jpg`;
    image.classList.add("bgimg");
    body.prepend(image);

}

function getRandom() {
    //return Math.randomNumber();
    return Math.floor(Math.random() * ImgNo);
}

function init() {
    const randomNumber = getRandom();
    getImg(randomNumber);
}

init();