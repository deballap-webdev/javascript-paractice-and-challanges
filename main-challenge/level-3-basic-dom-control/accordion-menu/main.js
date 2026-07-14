"use strict";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const questionButtons = document.querySelectorAll(".question-list__button");

  let holdAnswer = null;
  let holdArrow = null;
  const activeAccordionStateTracker = (arrow, answer) => {
    if (arrow && answer) {
      if (
        arrow.classList.contains("activeArrow") &&
        answer.classList.contains("displayBlock")
      ) {
        arrow.classList.remove("activeArrow");
        answer.classList.remove("displayBlock");
        answer.classList.add("displayNone");
      } else {
        console.log(`something is wrong!`);
      }
    }
  };

  questionButtons.forEach((questionButton) => {
    questionButton.addEventListener("click", (event) => {
      const answer = questionButton.parentElement.querySelector(
        ".answer-container .answer",
      );
      const arrow = questionButton.querySelector(".arrow");
      if (holdAnswer !== answer && holdArrow !== arrow) {
        activeAccordionStateTracker(holdArrow, holdAnswer);
      } else {
        holdAnswer = null;
        holdArrow = null;
      }
      answer.classList.toggle("displayBlock");
      answer.classList.toggle("displayNone");
      arrow.classList.toggle("activeArrow");

      console.log(
        arrow.classList.contains("activeArrow") &&
          answer.classList.contains("displayBlock"),
      );

      holdAnswer = answer;
      holdArrow = arrow;
    });
  });
};
