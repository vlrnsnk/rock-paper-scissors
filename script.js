let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = [
    "rock",
    "paper",
    "scissors",
  ]
  const randomChoice = Math.floor(Math.random() * 3);

  return choices[randomChoice];
};

const getHumanChoice = () => {
  const humanChoice = prompt("Make your choice:");

  return humanChoice;
};

console.log(getComputerChoice());
console.log(getHumanChoice());
