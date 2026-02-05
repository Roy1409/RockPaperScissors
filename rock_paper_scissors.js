const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};

function getComputerChoice() {
  num = Math.floor(Math.random() * 3);
  if (num == 0) {
    return "paper";
  } else if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === "bomb") {
    return "The user won!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "The user won!";
    }
  }
}

function playGame() {
  userChoice = getUserChoice("rock");
  computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
