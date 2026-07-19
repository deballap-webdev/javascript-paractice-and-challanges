"use strict";
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  const plusButton = document.querySelector("#plus");
  const minusButton = document.querySelector("#minus");
  const resizeableText = document.querySelector("#resizeable");
  resizeableText.classList.add("resizeable");

  const getResizableTextFontSizeString = () => {
    return window.getComputedStyle(resizeableText).fontSize;
  };

  const getResizableTextFontSize = () => {
    return parseInt(getResizableTextFontSizeString(), 10);
  };

  const setFontSize = () =>
    localStorage.setItem(
      "fontSize",
      JSON.stringify(getResizableTextFontSize()),
    );

  const getFontSize = () => JSON.parse(localStorage.getItem("fontSize"));

  const saveFontSize = () => {
    const savedSize = getFontSize();
    if (savedSize) {
      resizeableText.style.fontSize = savedSize + "px";
    }
  };

  saveFontSize();

  const resizeFont = (value) => {
    resizeableText.style.fontSize = getResizableTextFontSize() + value + "px";
    setFontSize();
  };

  plusButton.addEventListener("click", (event) => {
    resizeFont(2);
  });

  minusButton.addEventListener("click", (event) => {
    resizeFont(-2);
  });
};
