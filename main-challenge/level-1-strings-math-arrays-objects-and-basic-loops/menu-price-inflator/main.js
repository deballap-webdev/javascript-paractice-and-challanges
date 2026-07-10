const menu = {
  bread: 200,
  tea: 150,
  coffee: 180,
  pizza: 300,
  taco: 250,
  chicken: 350,
};

const inflatedPrice = (object) => {
  const inflatedObject = {};
  for (dish in object) {
    inflatedObject[dish] = (object[dish] * 1.1).toFixed(2);
  }
  return inflatedObject;
};

console.log(inflatedPrice(menu));
