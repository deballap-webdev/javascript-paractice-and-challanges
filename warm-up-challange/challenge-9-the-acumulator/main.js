const schoolStationary = {
  book: 500,
  pen: 20,
  marker: 50,
  whiteboard: 1500,
  pencil: 10,
  sharpener: 15,
  eraser: 5,
};
const schoolStationaryPrice = Object.values(schoolStationary);

const calculateGrossTotalPrice = (array) => {
  const netTotal = calculateNetTotalPrice(array);
  const taxPrice = tax(netTotal, 5);
  const grossTotal = netTotal + taxPrice;
  return grossTotal;
};

const calculateNetTotalPrice = (array) => {
  let totalPrice = 0;
  for (let i = 0; i < array.length; i++) {
    totalPrice += array[i];
  }
  return totalPrice;
};

const tax = (price, percent) => {
  return price * (percent / 100);
};

console.log(calculateGrossTotalPrice(schoolStationaryPrice));
