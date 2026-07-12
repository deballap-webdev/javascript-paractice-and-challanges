document.addEventListener("readystatechange", (event) => {
  initApp();
});

const initApp = () => {
  const calcSliderPercent = (slider) => {
    return slider.id === "transparent"
      ? `transparency ${100 - ((slider.value / (slider.max - slider.min)) * 100).toFixed(2)}%`
      : `${((slider.value / (slider.max - slider.min)) * 100).toFixed(2)}%`;
  };

  const redSliderLabel = document.querySelector("label[for = 'red']");
  const redSlider = document.querySelector("#red");
  redSliderLabel.textContent = calcSliderPercent(redSlider);

  const greenSliderLabel = document.querySelector("label[for = 'green']");
  const greenSlider = document.querySelector("#green");
  greenSliderLabel.textContent = calcSliderPercent(greenSlider);

  const blueSliderLabel = document.querySelector("label[for = 'blue']");
  const blueSlider = document.querySelector("#blue");
  blueSliderLabel.textContent = calcSliderPercent(blueSlider);

  const transparentSliderLabel = document.querySelector(
    'label[for= "transparent"]',
  );
  const transparentSlider = document.querySelector("#transparent");
  transparentSliderLabel.textContent = `transparency ${100 - ((transparentSlider.value / (transparentSlider.max - transparentSlider.min)) * 100).toFixed(2)}%`;

  const sliders = document.querySelectorAll(".section__slider");

  const colorBox = document.querySelector(".color-box");
  sliders.forEach((slider) => {
    slider.addEventListener("input", (event) => {
      const sliderLabel = document.querySelector(
        `label[for = "${event.target.id}"]`,
      );
      sliderLabel.textContent = calcSliderPercent(slider);
      colorBox.style.backgroundColor = `rgba(${redSlider.value}, ${greenSlider.value}, ${blueSlider.value}, ${transparentSlider.value / 100})`;
    });
  });
};
