import * as mathFormulas from "./MathFormulas.js";
document.addEventListener("readystatechange", (event) => {
  initApp();
});

const initApp = () => {
  const mainCategoryFormulas = document.querySelector("#mainCategoryFormulas");
  const subCategory = document.querySelector("#subCategory");
  const mapObject = {
    "2d": {
      Circle: [
        { value: "area-circle", text: "Area of a Cirle" },
        {
          value: "circumference-circle",
          text: "Circumference of a Circle",
        },
      ],

      Traingle: [
        {
          value: "area-triangle",
          text: "Area of a Triangle",
        },
        { value: "perimeter-triangle", text: "Perimeter of a Triangle" },
      ],

      Square: [
        { value: "area-square", text: "Area of a Square" },
        { value: "perimeter-square", text: "Perimeter of a Square" },
      ],

      Rectangle: [
        { value: "area-rectangle", text: "Area of a Rectangle" },
        { value: "perimeter-rectangle", text: "Perimeter of a Rectangle" },
      ],

      Tripeziod: [
        { value: "area-trapeziod", text: "Area of a Trapezoid" },
        { value: "perimmeter-trapeziod", text: "Perimeter of a Trapeziod" },
      ],
    },
    "3d": {
      Cube: [
        {
          value: "surface-area-cube",
          text: "Surface Area of a Cube",
        },
        {
          value: "volume-cube",
          text: "Volume of a Cube",
        },
      ],

      Cuboid: [
        {
          value: "surface-area-cuboid",
          text: "Surface Area of a Cuboid",
        },
        {
          value: "volume-cube",
          text: "Volume of a Cube",
        },
      ],

      Cylinder: [
        {
          value: "curved-surface-area-cylinder",
          text: "Curved Surface Area of a Cylinder",
        },
        {
          value: "total-surface-area-cylinder",
          text: "Total Surface Area of a Cylinder",
        },
        {
          value: "volume-cylinder",
          text: "Volume of a Cylinder",
        },
      ],

      Cone: [
        {
          value: "total-surface-area-cone",
          text: "Total Surface Area of a Cone",
        },
        {
          value: "volume-cone",
          text: "Volume of a Cone",
        },
      ],
    },

    conversionsMath: [
      {
        value: "celsius-to-farenheit",
        text: "Celsius to Farenheit",
      },
      {
        value: "farenheit-to-celsius",
        text: "Farenheit to Celsuis",
      },
      {
        value: "percentage",
        text: "Percentage",
      },
    ],
  };
  mainCategoryFormulas.addEventListener("change", (event) => {});
};
