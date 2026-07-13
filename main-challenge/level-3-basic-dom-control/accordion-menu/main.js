document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const questionButtons = document.querySelectorAll(".question-list__button");
  /* const questionButton = document.querySelector("#question-list__button-1");

  console.log(questionButton);
 */

  questionButtons.forEach((questionButton) => {
    console.log(questionButton.parentElement);

    questionButton.addEventListener("click", (event) => {
      const answer = questionButton.parentElement.querySelector(
        ".answer-container .answer",
      );
      const arrow = questionButton.querySelector(".arrow");
      answer.classList.toggle("displayBlock");
      answer.classList.toggle("displayNone");
      arrow.classList.toggle("activeArrow");
    });
  });
};
