const askToPlayGame = () => {
  const playGame = confirm("Do you want to play a game of guess the number?");
  playGame ? initGame() : alert("Ok maybe next time");
};

const initGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }

    if (playerChoice === "") {
      invalidChoice();
      continue;
    }

    playerChoice = formatPlayerChoice(playerChoice);
    playerChoice = evaluatePlayerChoice(playerChoice);

    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const randomNumber = generateRandomNumber();
    const result = determineResult(playerChoice, randomNumber);
    alert(result);
    if (!playAgain()) {
      thanksForPlaying();
      break;
    }
    continue;
  }
};

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  return randomNumber;
};

const getPlayerChoice = () => {
  const playerChoice = prompt("Enter a number between 1-100");
  if (playerChoice || playerChoice === "") {
    return playerChoice;
  } else {
    return false;
  }
};

const formatPlayerChoice = (playerChoice) => {
  return Number(playerChoice);
};

const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice >= 1 && playerChoice <= 100) {
    return playerChoice;
  } else {
    return false;
  }
};

const determineResult = (playerChoice, randomNumber) => {
  const result =
    playerChoice === randomNumber
      ? `Correct!\nPlayer: ${playerChoice}\nCorrect Answer: ${randomNumber}`
      : playerChoice > randomNumber
        ? `Too High!\nPlayer: ${playerChoice}\nCorrect Answer: ${randomNumber}`
        : `Too Low!\nPlayer: ${playerChoice}\nCorrect Answer: ${randomNumber}`;
  return result;
};

const invalidChoice = () => {
  alert("You didnt enter a number between 1-100");
};

const decidedNotToPlay = () => {
  alert("Ok i guess you changed your mind maybe next time");
};

const playAgain = () => {
  const playAgain = confirm("Do you want to playAgain");
  return playAgain;
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing");
};

askToPlayGame();
