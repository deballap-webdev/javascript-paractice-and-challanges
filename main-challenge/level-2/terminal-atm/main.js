"use strict";

let balance = 5000;
let used = 0;
const initAtm = () => {
  const useAtm = confirm("Do you want to use the terminal ATM?");
  useAtm
    ? terminalAtm()
    : alert(
        "Ok maybe next time, the terminal ATM is always available for you!",
      );
};

const terminalAtm = () => {
  while (true) {
    let userInput = getUserInput();

    if (userInput === "") {
      invalidInput();
      continue;
    }

    if (!userInput) {
      if (used) {
        decidedNotToUseAtm();
        break;
      }
      thanksForCheckingAtm();
      break;
    }

    userInput = sanitizeUserInput(userInput);
    userInput = validateUserInput(userInput);

    if (!userInput) {
      invalidInput();
      continue;
    }

    if (userInput === "withdraw") {
      while (true) {
        let amount = askToInputAmount("withdraw");

        if (amount !== "" && !amount) {
          break;
        }
        amount = sanitizeAmount(amount);

        if (amount === "") {
          throwError("You didn't enter a valid number");
          invalidAmount(amount);
          continue;
        }

        if (!isAmountNumber(amount)) {
          throwError("You didn't enter a valid number");
          invalidAmount(amount);
          continue;
        }
        if (handleWithdraw(amount)) {
          break;
        }
      }
    }

    if (userInput === "deposit") {
      while (true) {
        let amount = askToInputAmount("deposit");
        if (amount !== "" && !amount) {
          break;
        }

        amount = sanitizeAmount(amount);

        if (amount === "") {
          throwError("You didn't enter a valid number");
          invalidAmount(amount);
          continue;
        }

        if (!isAmountNumber(amount)) {
          throwError("You didn't enter a valid number");
          invalidAmount(amount);
          continue;
        }
        if (handleDeposit(amount)) {
          break;
        }
      }
    }

    if (userInput === "checkbalance") {
      displayBalance();
    }

    if (askToContinue()) {
      continue;
    }
    thanksForCheckingAtm();
    break;
  }
};

const getUserInput = () => {
  const input = prompt(
    "to withdraw enter 'withdraw', to check balance enter 'check balance', to deposit 'enter deposit' ",
  );
  if (input || input === "") {
    return input;
  } else {
    return false;
  }
};

const invalidInput = () => {
  alert("You didn't enter 'withdraw', 'check balance' or 'deposit'");
};

const decidedNotToUseAtm = () => {
  alert(
    "I guess you changed your mind, maybe next time. Our atm is always available for you!",
  );
};

const sanitizeUserInput = (userInput) => {
  return userInput.split(" ").join("").toLowerCase();
};

const validateUserInput = (userInput) => {
  return userInput === "withdraw" ||
    userInput === "deposit" ||
    userInput === "checkbalance"
    ? userInput
    : false;
};

const askToInputAmount = (transactionType) => {
  used++;
  const inputAmount = prompt(
    `Please enter the amount you want to ${transactionType}`,
  );

  return inputAmount || inputAmount === "" ? inputAmount : false;
};

const handleWithdraw = (amount) => {
  if (amount > balance) {
    throwError("You cannot withdraw more than your balance");
    failedTransaction("insufficient funds", "Withdraw");
    return false;
  } else if (amount < 0) {
    throwError("you cannot withdraw a negative amount");
    failedTransaction("negative withdraw attempt", "Withdraw");
    return false;
  } else {
    balance = balance - amount;
    succesfullTransaction("Withdraw");
    return true;
  }
};

const handleDeposit = (amount) => {
  if (amount < 0) {
    throwError("You cannot deposit a negative amount");
    failedTransaction("negative deposit attempt", "Deposit");
    return false;
  } else {
    balance = balance + amount;
    succesfullTransaction("Deposit");
    return true;
  }
};

const failedTransaction = (reason, type) => {
  alert(`${type} failed due to ${reason}\nCurrent Balance:${balance}`);
};

const succesfullTransaction = (type) => {
  alert(`${type} successful!\nCurrent Balance: ${balance}`);
};

const sanitizeAmount = (amount) => {
  return Number(amount.toString().split(",").join("").split(" ").join(""));
};

const isAmountNumber = (amount) => {
  return !Number.isNaN(amount) ? amount : false;
};

const throwError = (message) => {
  try {
    throw new Error(message);
  } catch (err) {
    console.error(err);
  }
};

const invalidAmount = (amount) => {
  alert(`Please enter a valid number`);
};

const thanksForCheckingAtm = (amount) => {
  alert(
    "Ok, thanks for checking out the terminal Atm. It is available for you anytime!",
  );
};

const displayBalance = () => {
  used++;
  alert(`Current Balance: ${balance}`);
};

const askToContinue = () => {
  return confirm("Do you want to continue using the terminal ATM");
};

initAtm();
