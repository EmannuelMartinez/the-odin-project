let computerChoices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Initial Set-Up
let rock = document.querySelector(".rockBtn");
let paper = document.querySelector(".paperBtn");
let scissors = document.querySelector(".scissorsBtn");
let displayMsg = document.querySelector(".winnerMessage");
let humanScoreTxt = document.querySelector(".humanScore");
let computerScoreTxt = document.querySelector(".computerScore");
let computerRock = document.querySelector(".computerRock");
let computerPaper = document.querySelector(".computerPaper");
let computerScissors = document.querySelector(".computerScissors");
let restart = document.querySelector("#restart");

restart.style.disabled = "true";
restart.style.visibility = "hidden";

rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click", () => playRound("scissors"));
restart.addEventListener("click", restartGame);

function getComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(humanChoice) {
  let computerSelection = getComputerChoice();
  determineWinner(humanChoice, computerSelection);
}

function computerSelectionColor(computerSelection) {
  computerRock.textContent = "";
  computerPaper.textContent = "";
  computerScissors.textContent = "";
  switch (computerSelection) {
    case "rock":
      computerRock.textContent = "🤖";
      break;
    case "paper":
      computerPaper.textContent = "🤖";
      break;
    case "scissors":
      computerScissors.textContent = "🤖";
      break;
  }
}

function determineWinner(playerSelection, computerSelection) {
  computerSelectionColor(computerSelection);
  if (playerSelection === computerSelection) {
    displayMsg.textContent = "It's a tie! No winner.";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      displayMsg.textContent = "You win! Rock beats scissors";
      humanScore++;
    } else {
      displayMsg.textContent = "You lose! Paper beats rock";
      computerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      displayMsg.textContent = "You win! Paper beats rock.";
      humanScore++;
    } else {
      displayMsg.textContent = "You lose! Scissors beats paper.";
      computerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      displayMsg.textContent = "You win! Scissors beats paper";
      humanScore++;
    } else {
      displayMsg.textContent = "You lose! Rock beats scissors";
      computerScore++;
    }
  } else {
    displayMsg.textContent = "Something broke.";
  }
  humanScoreTxt.textContent = humanScore;
  computerScoreTxt.textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    printResults(humanScore, computerScore);
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    restart.style.disabled = false;
    restart.style.visibility = "visible";
  }
}

function printResults(humanScore, computerScore) {
  if (humanScore > computerScore) {
    displayMsg.textContent = "You won!!! 🥳";
  } else if (computerScore > humanScore) {
    displayMsg.textContent = "You lost!!! 😭";
  }
}

function restartGame() {
  displayMsg.innerHTML = "Choose below!<br>First to 5 Points Wins!";
  restart.style.disabled = true;
  console.log(displayMsg);
  computerScore = 0;
  humanScore = 0;
  restart.style.visibility = "hidden";
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
  computerRock.textContent = "";
  computerPaper.textContent = "";
  computerScissors.textContent = "";
  humanScoreTxt.textContent = humanScore;
  computerScoreTxt.textContent = computerScore;
}
