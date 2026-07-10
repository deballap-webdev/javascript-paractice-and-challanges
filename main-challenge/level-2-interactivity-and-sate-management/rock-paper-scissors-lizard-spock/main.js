const initGame = () => {
  const startGame = confirm(
    "Do you want to play a game of rock, paper, scissor, lizard or spock?",
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
  const playerChoice = prompt(
    "please enter rock, paper, scissors, lizard, or spock",
  );
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
  alert("You didn't enter rock, paper, scissors, lizard or spock");
};

const formatPlayerChoice = (playerChoice) => {
  return playerChoice.trim().toLowerCase();
};

const isPlayerChoiceValid = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors" ||
    playerChoice === "lizard" ||
    playerChoice === "spock"
  ) {
    return true;
  } else {
    return false;
  }
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 5);
};

const getComputerChoice = () => {
  const randomNumber = generateRandomNumber();
  const rpsArray = ["rock", "paper", "scissors", "lizard", "spock"];
  return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const result =
    player === computer
      ? `Player: ${player}\nComputer: ${computer}\nTie Game!`
      : (player === "rock" &&
            (computer === "scissors" || computer === "lizard")) ||
          (player === "paper" &&
            (computer === "rock" || computer === "spock")) ||
          (player === "scissors" &&
            (computer === "paper" || computer === "lizard")) ||
          (player === "lizard" &&
            (computer === "spock" || computer === "paper")) ||
          (player === "spock" &&
            (computer === "scissors" || computer === "rock"))
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
