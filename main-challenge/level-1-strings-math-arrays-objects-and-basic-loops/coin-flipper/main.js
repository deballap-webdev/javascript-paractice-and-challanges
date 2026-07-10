const coinFlipper = () => {
  const randomNumber = Math.floor(Math.random() * 2);
  const headOrTail = randomNumber === 1 ? "head" : "tail";
  return headOrTail;
};

for (let i = 0; i < 10; i++) {
  console.log(coinFlipper());
}
