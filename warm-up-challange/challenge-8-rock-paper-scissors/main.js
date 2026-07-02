const initGame = () => {
  const startGame = confirm(
    "Do you want to play a game of rock, paper, or scissor?",
  );
  startGame ? playGame() : alert("Ok, maybe next time");
};

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }

    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }

    playerChoice = formatPlayerChoice(playerChoice);

    if (!isPlayerChoiceValid(playerChoice)) {
      invalidChoice();
      continue;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (!askToPlayAgain()) {
      thanksForPlaying();
      break;
    }
    continue;
  }
};

const getPlayerChoice = () => {
  const playerChoice = prompt("please enter rock paper or scissors");
  if (playerChoice || playerChoice === "") {
    return playerChoice;
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind, maybe next time");
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper or scissors");
};

const formatPlayerChoice = (playerChoice) => {
  return playerChoice.trim().toLowerCase();
};

const isPlayerChoiceValid = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return true;
  } else {
    return false;
  }
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 3);
};

const getComputerChoice = () => {
  const randomNumber = generateRandomNumber();
  const rpsArray = ["rock", "paper", "scissors"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const result =
    player === computer
      ? `Player: ${player}\nComputer: ${computer}\nTie Game!`
      : (player === "rock" && computer === "scissors") ||
          (player === "paper" && computer === "rock") ||
          (player === "scissors" && computer === "paper")
        ? `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`
        : `Player: ${player}\nComputer: ${computer}\nComputer Wins!`;

  return result;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Would you like to play again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing");
};

initGame();
