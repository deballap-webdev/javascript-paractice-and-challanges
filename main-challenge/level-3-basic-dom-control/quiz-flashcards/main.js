document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  let currentActiveAnswer = null;
  const questions = document.querySelectorAll(".questions");
  const questionList = document.querySelector(".question-list");
  console.log(questionList);

  //selects the section holding answers to the questions
  const answerGroup = document.querySelector("#answer-group");

  //selects the exit button inside the answer group section
  const exitButton = answerGroup.querySelector("button");
  
  questions.forEach((question) => {
    question.addEventListener("click", (event) => {
      const answer = document.querySelector(`#${event.target.id}_answer`);
      questionList.style.display = "none";
      answerGroup.style.display = "flex";
      answer.style.display = "flex";
      currentActiveAnswer = answer;
    });
  });

  exitButton.addEventListener("click", (event) => {
    questionList.style.display = "block";
    answerGroup.style.display = "none";
    currentActiveAnswer.style.display = "";
  });
};
