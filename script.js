const myImage = document.getElementById("mainImage");
const burgerImage = document.getElementById("mainImage2");

const cityDayBtn = document.getElementById("cityDayBtn");
const cityNightBtn = document.getElementById("cityNightBtn");
const burgerPattyBtn = document.getElementById("burgerPattyBtn");
const burgerBunBtn = document.getElementById("burgerBunBtn");

function setActiveButton(activeButton, inactiveButtons) {
    activeButton.classList.add("active");
    inactiveButtons.forEach((button) => button.classList.remove("active"));
}

function showDay() {
    if (!myImage) return;
    myImage.src = "day.png";
    setActiveButton(cityDayBtn, [cityNightBtn]);
}

function showNight() {
    if (!myImage) return;
    myImage.src = "night.png";
    setActiveButton(cityNightBtn, [cityDayBtn]);
}

function showDay2() {
    if (!burgerImage) return;
    burgerImage.src = "images/patty2.png";
    setActiveButton(burgerPattyBtn, [burgerBunBtn]);
}

function showNight2() {
    if (!burgerImage) return;
    burgerImage.src = "images/burgerban.png";
    setActiveButton(burgerBunBtn, [burgerPattyBtn]);
}


