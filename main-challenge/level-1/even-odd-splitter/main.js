const myIntegers = [1, 2, 8, 7, 4, 9, 3, 4, 5, 6, 11, 13, 12];

const evenOddSplitter = (intarray) => {
  const validArray = checkForValidArray(intarray);
  if (!validArray) {
    console.error(
      "Your array includes floating (decimal) numbers, please enter only integers (whole numbers) and try again",
    );
  } else {
    let evenNumbers = intarray.filter((integer) => {
      return integer % 2 === 0;
    });

    let oddNumbers = intarray.filter((integer) => {
      return integer % 2 !== 0;
    });

    evenNumbers = evenNumbers.join(", ");
    oddNumbers = oddNumbers.join(" ,");
    console.log(`even numbers: ${evenNumbers}\nOdd Numbers: ${oddNumbers}`);
  }
};

const checkForValidArray = (array) => {
  return array.every((item) => {
    return Number.isInteger(item);
  });
};

evenOddSplitter(myIntegers);
