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

  if (humanChoice === computerChoice) {
    console.log(`It's a draw! ${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}.`);
    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    console.log(`You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`);
    humanScore++;
    return;
  } else {
    console.log(`You lose! ${humanChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}.`);
    computerScore++;
    return;
  }
};

const getWinner = (choice1, choice2) => {};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
console.log(humanScore, computerScore);
