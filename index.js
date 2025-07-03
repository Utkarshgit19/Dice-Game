var number=Math.ceil(Math.random()*6);
var number2=Math.ceil(Math.random()*6);
// console.log(number);
var randomname="images/dice"+number+".png";
var randomname2="images/dice"+number2+".png";

if(number>number2){
    document.querySelector("h1").innerHTML = "Player1 WINS";
}
else if(number2>number){
    document.querySelector("h1").innerHTML = "Player2 WINS";
}
if(number===number2){
    document.querySelector("h1").innerHTML = "Its a DRAW";
}
document.querySelectorAll("img")[0].setAttribute("src",randomname);
document.querySelectorAll("img")[1].setAttribute("src",randomname2);

$(document).keypress(function(event){
    $("h1").text(event.key);
});
