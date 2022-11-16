let computerChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound() {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
  let playerSelection = prompt(
    "What is your choice? (Rock, Paper, or Scissors): "
  ).toLowerCase();

  return determineWinner(playerSelection, computerSelection);
}

function determineWinner(playerSelection, computerSelection) {
  let message;
  let result;
  if (playerSelection === computerSelection) {
    message = "It's a tie! No winner.";
    result = 2;
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      message = "You win! Rock beats scissors";
      result = 0;
    } else {
      message = "You lose! Paper beats rock";
      result = 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      message = "You win! Paper beats rock.";
      result = 0;
    } else {
      message = "You lose! Scissors beats paper.";
      result = 1;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      message = "You win! Scissors beats paper";
      result = 0;
    } else {
      message = "You lose! Rock beats scissors";
      result = 1;
    }
  } else {
    message = "Something broke.";
  }
  console.log(message);
  return result;
}

function printResults(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(
      `You won! Final score - You: ${humanScore}, Computer: ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost! Final score - You: ${humanScore}, Computer: ${computerScore}`
    );
  } else {
    console.log(
      `It was a tie! Final score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }
}

function game() {
  let computerScore = 0;
  let humanScore = 0;
  let result;
  for (let i = 0; i < 5; i++) {
    result = playRound();
    if (result === 0) {
      humanScore++;
    } else if (result === 1) {
      computerScore++;
    }
  }
  printResults(humanScore, computerScore);
}

game();
