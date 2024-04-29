var randomNumber1 =Math.floor((Math.random()*6)+1);
var randomNumber2 =Math.floor((Math.random()*6)+1);
var imgFilePath1  ="./images/dice"+ randomNumber1 + ".png";
var imgFilePath2  ="./images/dice"+ randomNumber2 + ".png";

//dice-image-conditions
document.querySelector("img.img1").setAttribute("src", imgFilePath1);


document.querySelector("img.img2").setAttribute("src", imgFilePath2)




//text-content-winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if (randomNumber2  > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else if ( randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
