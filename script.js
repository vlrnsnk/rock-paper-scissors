let humanScore = 0;
let computerScore = 0;
const movesEl = document.querySelector('.moves-wrapper');
const resultsEl = document.querySelector('.results');

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
  if (humanChoice === computerChoice) {
    resultsEl.textContent = `It's a draw! ${humanChoice.toUpperCase()} vs ${computerChoice.toUpperCase()}.`;

    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    resultsEl.textContent = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
    humanScore++;

    return;
  } else {
    resultsEl.textContent = `You lose! ${humanChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}.`;
    computerScore++;

    return;
  }
};

movesEl.addEventListener('click', (event) => {
  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);
});


console.log(`Rock Paper Scissors Game - Play for ${rounds} Rounds`);
console.log(`Choose one of those: "rock", "paper", "scissors".`);

console.log(`Round ${i + 1}`);

console.log(`Current score: You: ${humanScore} - Computer: ${computerScore}`);

if (humanScore > computerScore) {
  console.log(`You've win the game! You: ${humanScore} - Computer: ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`You've lost the game! You: ${humanScore} - Computer: ${computerScore}`);
} else {
  console.log(`This game ended in a draw! You: ${humanScore} - Computer: ${computerScore}`);
}
