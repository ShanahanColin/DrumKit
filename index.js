

// DETECTING BUTTON PRESS
let btns = document.querySelectorAll(".drum");
for(i of btns){
  i.addEventListener("click", function() {

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}

// DETECTING KEYBOARD PRESS

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      var snareS = new Audio("sounds/snare.mp3");
      snareS.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;


    default: console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+ currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){activeButton.classList.remove("pressed");},200);
}
