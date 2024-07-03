var ran = Math.random();

ran = ran * 6 ;
ran = Math.floor(ran) +1;

var ran1 = Math.random();

ran1 = ran1 * 6 ;
ran1 = Math.floor(ran1) +1;

document.querySelector(".img1").setAttribute("src", "./images/dice" + ran +".png")
document.querySelector(".img2").setAttribute("src", "./images/dice" + ran1 +".png")

if (ran> ran1) {
    document.querySelector("h1").innerText = "🚩Player 1 WINS!"
}

else if (ran === ran1) {
    document.querySelector("h1").innerText = "Draw."
    
}
else {
    document.querySelector("h1").innerText = "Player 2 WINS!🚩"
    
}