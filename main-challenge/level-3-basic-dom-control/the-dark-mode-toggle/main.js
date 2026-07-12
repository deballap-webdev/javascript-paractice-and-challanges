document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    body.classList.toggle("dark-theme");
    const buttonText =
      button.textContent === "Toggle Dark-Mode"
        ? "Toggle Light-Mode"
        : "Toggle Dark-Mode";
    button.textContent = buttonText;
  });
};
