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