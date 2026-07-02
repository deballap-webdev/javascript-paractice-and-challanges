// Checks Log in status with if statements

const checkLogInStatus = (userName) => {
  const randomNumber = generateRandomNumber();
  const status = isUserLoggedIn(randomNumber);
  if (!status) {
    console.log("Please Log In to Continue");
  } else {
    console.log(`Welcome ${userName}`);
  }
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 2);
};

const isUserLoggedIn = (boolean) => {
  if (boolean) {
    return true;
  } else {
    return false;
  }
};

// Checks Log in status with tenary operators

const checkLogInStatus2 = (userName) => {
  const randomNumber = generateRandomNumber();
  const status = isUserLoggedIn2(randomNumber);
  !status
    ? console.log("Please Log In to Continue")
    : console.log(`Welcome ${userName}`);
};

const isUserLoggedIn2 = (boolean) => {
  const logInStatus = boolean ? true : false;
  return logInStatus;
};
