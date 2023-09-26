//Comouter random choice
function getComputerChoice() {
  const pick= ["rock", "paper", "scissor"];
  return pick[Math.floor(Math.random() * pick.length)];
}
//One Round of Rock Paper Scissor
function playRound(playerChoice, computerChoice) {
  if(playerChoice === computerChoice){
    return `It's a tie! you both picked ${playerChoice}`;
  } else if (playerChoice === "rock" && computerChoice === "scissor"){
    return "You win!, Rock beats Scissor";
  } else if (playerChoice === "paper" && computerChoice === "rock"){
    return "You win!, Paper beats Rock";
  } else if (playerChoice === "scissor" && computerChoice === "paper"){
    return "You win!, Scissor beats Paper";
  } else if (playerChoice === "rock" && computerChoice === "paper"){
    return "You Lost!, Paper beats Rock";
  } else if (playerChoice === "paper" && computerChoice === "scissor"){
    return "You Lost!, Scissor beats Paper";
  } else if (playerChoice === "scissor" && computerChoice === "rock"){
    return "You Lost!, Rock beats scissor";
  }
}
