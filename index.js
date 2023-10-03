const genRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const randomNumber1 = genRandomNumber(1, 6);

var randomDiceImg1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImg1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImgSrc1);

const randomNumber2 = genRandomNumber(1, 6);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSrc2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Won! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!! 😁";
}