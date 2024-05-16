var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
var randomImage1Source="images/dice"+randomNumber1+".png";

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
var randomImage2Source="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src", randomImage1Source);
document.querySelector(".img2").setAttribute("src", randomImage2Source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩 ";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}