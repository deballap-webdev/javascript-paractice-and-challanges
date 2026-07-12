document.addEventListener("readystatechange", (event) => {
  initApp();
});

const initApp = () => {
  const textarea = document.querySelector(".textarea");
  const textCounter = document.querySelector(".text-counter");
  textarea.addEventListener("input", (event) => {
    const characterCount = textarea.value.length;
    textCounter.textContent = `${characterCount}/280`;
    maxLimitExceeded(characterCount, 280);
  });

  const maxLimitExceeded = (count, limit) => {
    if (count > limit) {
      textarea.classList.add("red");
      textCounter.classList.add("yellow");
      textCounter.textContent =
        textCounter.textContent + " Warning! max limit exceeded";
    } else {
      textarea.classList.remove("red");
      textCounter.classList.remove("yellow");
    }
  };
};
