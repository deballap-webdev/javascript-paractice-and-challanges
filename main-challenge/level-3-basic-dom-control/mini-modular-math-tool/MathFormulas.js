export const calcAreaOfCircle = (r) => Math.PI * r ** 2;

export const calcCircumferenceOfCircle = (r) => 2 * Math.PI * r;

export const calcAreaOfTriangle = (b, h) => (1 / 2) * b * h;

export const calcPerimeterOfTriangle = (a, b, c) => a + b + c;

export const calcPerimeterOfSquare = (s) => 4 * s;

export const calcAreaOfSquare = (s) => s ** 2;

export const calcPerimeterOfRectangle = (l, w) => 2 * (l + w);

export const calcPerimeterOfTrapeziod = (a, b1, c, b2) => a + b1 + b2 + c;

export const calcAreaOfTrapezoid = (a, b, h) => ((a + b) / 2) * h;

export const calcSAOfCube = (s) => 6 * s ** 2;

export const calcVolumeOfCube = (s) => s ** 3;

export const calcSAOfCuboid = (l, w, h) => 2 * (l * w + l * h + w * h);

export const calcVolumeOfCuboid = (l, w, h) => l * w * h;

export const calcCSAOfCylinder = (r, h) => 2 * Math.PI * r * h;

export const calcTSAOfCylinder = (r, h) => 2 * Math.PI * r * (r + h);

export const calcTSAOfConeWithSlant = (r, l) => {
  return Math.PI * r * (l * r);
};

export const calcTSAOfConeWithHeight = (r, h) => {
  const l = Math.sqrt(r ** 2 + h ** 2);
  return Math.PI * r * (l * r);
};

export const calcVolumeOfCone = (r, h) => (Math.PI * r ** 2 * h) / 3;

export const convCelsiusToFahrenheit = (C) => C * (9 / 5) + 32;

export const convFahrenheitToCelsius = (F) => (F - 32) * (5 / 9);

export const calcPercentage = (part, whole) =>
  whole === 0 ? 0 : (part / whole) * 100;
