for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      let button = this.innerHTML;
      makeSound(button);
      keyPressed(button);
   });
}

document.addEventListener("keydown", function(event) {
   makeSound(event.key);
   keyPressed(event.key);
});

function makeSound(key) {
   switch (key) {
      case "w":
         // let audio = new Audio("sounds/tom-1.mp3");
         new Audio("sounds/tom-1.mp3").play();
         break;
      case "a":
         // let audio = new Audio("sounds/tom-2.mp3");
         new Audio("sounds/tom-2.mp3").play();
         break;
      case "s":
         // let audio = new Audio("sounds/tom-3.mp3");
         new Audio("sounds/tom-3.mp3").play();
         break;
      case "d":
         // let audio = new Audio("sounds/tom-4.mp3");
         new Audio("sounds/tom-4.mp3").play();
         break;
      case "j":
         // let audio = new Audio("sounds/snare.mp3");
         new Audio("sounds/snare.mp3").play();
         break;
      case "k":
         // let audio = new Audio("sounds/crash.mp3");
         new Audio("sounds/crash.mp3").play();
         break;
      case "l":
         // let audio = new Audio ("sounds/kick-bass.mp3");
         new Audio("sounds/kick-bass.mp3").play();
         break;
      default:
         console.log("ERROR! " + button);
         break;
   }
}

function keyPressed(key) {
   let button = document.querySelector("." + key);
   button.classList.add("pressed");
   setTimeout(function() {
      button.classList.remove("pressed")
   }, 200);
}