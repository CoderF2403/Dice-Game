var randomNumber1 = Math.floor(Math.random()*6)+1;//Generating random numbers
console.log(randomNumber1);
var randomDiceimage = "dice" + randomNumber1 +".png" ; //setting variable using concetination for image name in folder
var image1 = document.querySelectorAll("img")[0]; //selecting the child for manipulating
image1.setAttribute("src",randomDiceimage); //Setting attribute change for the element

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);
var randomDiceimage2 = "dice" + randomNumber2 +".png" ;
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceimage2);


//For Winner Decision//

if(randomNumber1>randomNumber2) {
    document.querySelector("h2").innerHTML="Player 1 Wins"
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h2").innerHTML="Player 2 Wins"
}
else {
    document.querySelector("h2").innerHTML="Draw"
}