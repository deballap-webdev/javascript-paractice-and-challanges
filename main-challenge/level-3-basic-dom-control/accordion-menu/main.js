"use strict";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const questionButtons = document.querySelectorAll(".question-list__button");
  let activeAccordion = null;

  questionButtons.forEach((questionButton) => {
    questionButton.addEventListener("click", (event) => {
      const answers = document.querySelectorAll(".answer");
      const answer = questionButton.parentElement.querySelector(
        ".answer-container .answer",
      );
      const arrow = questionButton.querySelector(".arrow");
      if (activeAccordion !== null && activeAccordion !== questionButton) {
        answers.forEach((answer) => {
          if (answer.classList.contains("displayBlock")) {
            activeAccordion
              .querySelector(".arrow")
              .classList.remove("activeArrow");
            answer.classList.remove("displayBlock");
            answer.classList.add("displayNone");
          }
        });
      } else {
        activeAccordion = null;
      }

      answer.classList.toggle("displayBlock");
      answer.classList.toggle("displayNone");
      arrow.classList.toggle("activeArrow");
      if (answer.classList.contains("displayBlock")) {
        activeAccordion = questionButton;
      }
    });
  });
};
