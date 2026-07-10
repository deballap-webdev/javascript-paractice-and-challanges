const mathCalculator = (num1, num2, mathOperator) => {
  if (!isOperatorValid(mathOperator)) {
    throw new Error("Invalid mathOPerator Input");
  }

  if (num1 !== 0 && (!isNumValid(num1) || !numSanitizer(num1))) {
    throw new Error(`Invalid number input at first entry (num1 = ${num1} )`);
  }

  if (num2 !== 0 && (!isNumValid(num2) || !numSanitizer(num2))) {
    throw new Error(`Invalid number input at second entry (num2 = ${num2} )`);
  }

  const firstNum = numSanitizer(num1);
  const secondNum = numSanitizer(num2);

  if (num2 === 0 && (mathOperator === "/" || mathOperator === "%")) {
    throw new Error("cannot perform division by 0");
  }

  return runMathOperation(num1, num2, mathOperator);
};

const isOperatorValid = (mathOperator) => {
  return mathOperator === "+" ||
    mathOperator === "-" ||
    mathOperator === "/" ||
    mathOperator === "*" ||
    mathOperator === "**" ||
    mathOperator === "%"
    ? true
    : false;
};

const isNumValid = (num) => {
  return num === "" ||
    num === true ||
    num === false ||
    num === null ||
    num == Infinity
    ? false
    : true;
};

const numSanitizer = (num) => {
  const formattedNum = Number(
    num.toString().split(",").join("").split(" ").join(""),
  );

  return !Number.isNaN(formattedNum) ? formattedNum : false;
};

const runMathOperation = (num1, num2, mathOperator) => {
  return mathOperator === "+"
    ? num1 + num2
    : mathOperator === "-"
      ? num1 - num2
      : mathOperator === "/"
        ? num1 / num2
        : mathOperator === "*"
          ? num1 * num2
          : mathOperator === "**"
            ? num1 ** num2
            : num1 % num2;
};

try {
  console.log(mathCalculator(4, 3, "**"));
} catch (err) {
  console.error(err);
}
