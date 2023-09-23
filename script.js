var res = document.querySelector("#result");
var resTxt1 = "🚩Player 1 Wins!!!";
var resTxt2 = "Player 2 Wins!!!🚩";
var draw = "🚩Its a Draw🚩";

function playGame() {

    // for dice image1

    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var imgSrc1 = "./images/dice" + randomNum1 + ".png";

    var img1 = document.querySelector(".imgD1");
    img1.setAttribute("src", imgSrc1);

    // for dice image2

    var randomNum2 = Math.floor(Math.random() * 6) + 1;
    var imgSrc2 = "./images/dice" + randomNum2 + ".png";

    var img2 = document.querySelector(".imgD2");
    img2.setAttribute("src", imgSrc2);

    if (randomNum1 > randomNum2) {
        res.textContent = resTxt1;
    } else if (randomNum1 < randomNum2) {
        res.textContent = resTxt2;
    } else {
        res.textContent = draw;
        // res.style.left = "29rem";
    }
}