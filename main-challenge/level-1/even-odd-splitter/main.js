"use strict";
const myIntegers = [1, 2, 8, 7, 4, 9, 3, 4, 5, 6, 11, 13, 12];

const evenOddSplitter = (intarray) => {
  const validArray = checkForValidArray(intarray);
  if (!validArray) {
    console.error(
      "Your array includes floating (decimal) numbers, please enter only integers (whole numbers) and try again",
    );
  } else {
    let even = getEvenNumbersFromArray(intarray);
    let odd = getOddNumbersFromArray(intarray);

    even = formatArray(even);
    odd = formatArray(odd);
    logEvenAndOddNumbers(even, odd);
  }
};

const checkForValidArray = (array) => {
  return array.every((item) => {
    return Number.isInteger(item);
  });
};

const getEvenNumbersFromArray = (array) => {
  const evenNumbers = array.filter((integer) => {
    return integer % 2 === 0;
  });
  return evenNumbers;
};

const getOddNumbersFromArray = (array) => {
  const oddNumbers = array.filter((integer) => {
    return integer % 2 !== 0;
  });
  return oddNumbers;
};

const formatArray = (array) => {
  return array.join(", ");
};

const logEvenAndOddNumbers = (even, odd) => {
  console.log(`even numbers: ${even}\nOdd Numbers: ${odd}`);
};

evenOddSplitter(myIntegers);
