let humanScore = 0;
let computerScore = 0;
let round = 0;
const movesEl = document.querySelector('.moves-wrapper');
const resultsEl = document.querySelector('.results');
const scoreEl = document.querySelector('.score');
const roundEl = document.querySelector('.round');

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
  round++;
  roundEl.textContent = `Round #${round}`;

  if (humanChoice == computerChoice) {
    resultsEl.textContent = `It's a draw! ${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}.`;
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    resultsEl.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
    humanScore++;
  } else {
    resultsEl.textContent = `You lose! ${humanChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}.`;
    computerScore++;
  }

  scoreEl.textContent = `Current score: You: ${humanScore} - Computer: ${computerScore}`;

  if (round == 5) {
    if (humanScore > computerScore) {
      scoreEl.textContent = `You've win the game! You: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanScore < computerScore) {
      scoreEl.textContent = `You've lost the game! You: ${humanScore} - Computer: ${computerScore}`;
    } else {
      scoreEl.textContent = `This game ended in a draw! You: ${humanScore} - Computer: ${computerScore}`;
    }

    round = 0;
    humanScore = 0;
    computerScore = 0;
  }
};

movesEl.addEventListener('click', (event) => {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});
