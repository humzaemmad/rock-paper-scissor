//Comouter random choice
function getComputerChoice() {
  const pick= ["rock", "paper", "scissor"];
  return pick[Math.floor(Math.random() * pick.length)];
}
