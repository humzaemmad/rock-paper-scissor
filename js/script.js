function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let UserChoice=parseInt(prompt("Please choose 0 for rock,1 for paper or 2 for scissor"));
console.log(UserChoice);
if (UserChoice>2) {
console.log("You selected the wrong number. YOU LOSE!");
} 
let CompChoice = getRandomInt(3);
console.log("Computer Chose",CompChoice);
if (UserChoice>CompChoice) {
    console.log("YOU WIN!");
} else if(UserChoice===CompChoice {
    console.log("ITS A DRAW);
}
