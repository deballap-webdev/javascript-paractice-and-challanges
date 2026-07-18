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

  const resizeFont = (value) => {
    resizeableText.style.fontSize = getResizableTextFontSize() + value + "px";
  };

  plusButton.addEventListener("click", (event) => {
    resizeFont(2);
  });

  minusButton.addEventListener("click", (event) => {
    resizeFont(-2);
  });
};
