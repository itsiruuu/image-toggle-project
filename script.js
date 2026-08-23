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

const lightImage = document.getElementById("mainImage3");
const lightOnBtn = document.getElementById("lightOnBtn");
const lightOffBtn = document.getElementById("lightOffBtn");

function showLightOn() {
    if (!lightImage) return;
    lightImage.src = "images/lighton.png"; // আপনার অন-লাইটের ছবির সঠিক পাথ
    setActiveButton(lightOnBtn, [lightOffBtn]);
}

function showLightOff() {
    if (!lightImage) return;
    lightImage.src = "images/lightoff.png"; // আপনার অফ-লাইটের ছবির সঠিক পাথ
    setActiveButton(lightOffBtn, [lightOnBtn]);
}

