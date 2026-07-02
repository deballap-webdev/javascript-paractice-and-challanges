const daysInMonth = (month) => {
  month = formatInput(month);
  month = evaluateInput(month);

  if (!month) {
    console.log("You didn't enter a valid month of the year as parameter");
  } else {
    const days = determineDaysInMonth(month);
    console.log(days);
  }
};

const formatInput = (input) => {
  return input.trim().toLowerCase();
};

const evaluateInput = (input) => {
  if (
    input === "january" ||
    input === "february" ||
    input === "march" ||
    input === "april" ||
    input === "may" ||
    input === "june" ||
    input === "july" ||
    input === "august" ||
    input === "september" ||
    input === "october" ||
    input === "november" ||
    input === "december"
  ) {
    return input;
  } else {
    return false;
  }
};

const determineDaysInMonth = (month) => {
  switch (month) {
    case "september":
    case "april":
    case "june":
    case "november":
      return `${month} : 30 days`;
    case "february":
      return `${month} : 28 Days (29 Days if this is a leap year)`;
    default:
      return `${month} : 31 Days`;
  }
};
