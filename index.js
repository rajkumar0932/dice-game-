var randomnum=Math.floor((Math.random())*6)+1;
var srcc="./dice"+randomnum+".png";
document.querySelector(".img2").setAttribute("src",srcc);
var randomnum2=Math.floor((Math.random())*6)+1;
var srcc2="./dice"+randomnum2+".png";
document.querySelector(".img1").setAttribute("src",srcc2);

if(randomnum>randomnum2){
    document.querySelector("h1").innerText="player 2 wins";
}
else if(randomnum<randomnum2){
    document.querySelector("h1").innerText="player 1 wins";
}
else {
document.querySelector("h1").innerText="draw";;
}




