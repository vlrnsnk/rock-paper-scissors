let humanScore = 0;
let computerScore = 0;

const CHOICES = [
  "rock",
  "paper",
  "scissors",
];

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);

  return CHOICES[randomChoice];
};

const getHumanChoice = () => {
  let humanChoice = prompt("Make your choice:").toLowerCase();

  while (!CHOICES.includes(humanChoice)) {
    humanChoice = prompt("Invalid option, choose from ('rock', 'paper', 'scissors'):").toLowerCase();
  }

  return humanChoice;
};

const playRound = (humanChoice, computerChoice) => {
  console.log(humanChoice, computerChoice);
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
